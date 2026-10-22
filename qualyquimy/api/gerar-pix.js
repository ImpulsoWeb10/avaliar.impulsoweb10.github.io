export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

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

        // Estrutura JSON oficial exigida pela Orders API para pagamentos online via Pix
        const response = await fetch('https://api.mercadopago.com/v1/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenMP}`,
                'X-Idempotency-Key': crypto.randomUUID()
            },
            body: JSON.stringify({
                type: "online",
                total_amount: parseFloat(valor).toFixed(2),
                processing_mode: "automatic",
                transactions: {
                    payments: [
                        {
                            amount: parseFloat(valor).toFixed(2),
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
            // Mapeamento correto dos dados de resposta da Orders API
            const paymentInfo = data.transactions?.payments?.[0]?.payment_method;

            if (paymentInfo && paymentInfo.qr_code_base64) {
                return res.status(200).json({
                    copiaCola: paymentInfo.qr_code,
                    qrCodeBase64: paymentInfo.qr_code_base64
                });
            } else {
                return res.status(500).json({ error: 'Dados do Pix não encontrados na resposta', detalhes: data });
            }
        } else {
            return res.status(500).json({ error: 'Erro na API do Mercado Pago', detalhes: data });
        }

    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor do Pix' });
    }
}
