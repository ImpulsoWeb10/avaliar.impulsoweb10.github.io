export default async function handler(req, res) {
    // Configura os cabeçalhos para permitir que o seu site acesse a API (CORS)
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
        // Buscando o token que deixaremos escondido nas configurações da Vercel
        const tokenMP = process.env.MP_ACCESS_TOKEN;

        const response = await fetch('https://mercadopago.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenMP}`,
                'X-Idempotency-Key': crypto.randomUUID() // Evita cobrança duplicada
            },
            body: JSON.stringify({
                processing_mode: "automatic",
                data: {
                    transaction_amount: parseFloat(valor),
                    description: 'Pagamento Tintas Qualy Quimy',
                    payment_method_id: 'pix',
                    payer: {
                        email: 'financeiro.qualyquimy@gmail.com' // Seu e-mail de controle
                    }
                }
            })
        });

        const data = await response.json();

        if (response.ok) {
            // Devolve as chaves corretas do Pix direto para o seu HTML
            return res.status(200).json({
                copiaCola: data.point_of_interaction.transaction_data.qr_code,
                qrCodeBase64: data.point_of_interaction.transaction_data.qr_code_base64
            });
        } else {
            return res.status(500).json({ error: 'Erro na API do Mercado Pago', detalhes: data });
        }

    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor do Pix' });
    }
}
