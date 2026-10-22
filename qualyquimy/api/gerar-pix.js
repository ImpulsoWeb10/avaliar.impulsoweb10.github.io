export default async function handler(req, res) {
    // Configuração de CORS para permitir requisições de qualquer origem
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    // Responde imediatamente às requisições de pré-voo (OPTIONS) do navegador
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Método não permitido' });
    }

    const { valor } = req.body;
    if (!valor || valor <= 0) {
        return res.status(400).json({ error: 'Por favor, informe um valor válido.' });
    }

    try {
        const tokenMP = process.env.MP_ACCESS_TOKEN;

        // Requisição para a Orders API do Mercado Pago
        const response = await fetch('https://api.mercadopago.com/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenMP}`,
                'X-Idempotency-Key': crypto.randomUUID()
            },
            body: JSON.stringify({
                type: "online",
                total_amount: parseFloat(valor),
                processing_mode: "automatic",
                transactions: {
                    payments: [
                        {
                            amount: parseFloat(valor),
                            payment_method: {
                                id: "pix",
                                type: "bank_transfer"
                            }
                        }
                    ]
                },
                payer: {
                    email: 'financeiro.qualyquimy@gmail.com'
                }
            })
        });

        const data = await response.json();

        if (response.ok) {
            const paymentInfo = data.transactions?.payments?.[0]?.payment_method;

            if (paymentInfo && paymentInfo.qr_code_base64) {
                return res.status(200).json({
                    copiaCola: paymentInfo.qr_code,
                    qrCodeBase64: paymentInfo.qr_code_base64
                });
            } else {
                return res.status(500).json({ error: 'Dados do Pix não encontrados na resposta.', detalhes: data });
            }
        } else {
            return res.status(500).json({ error: 'Erro retornado pelo Mercado Pago.', detalhes: data });
        }

    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor do Pix.' });
    }
}
