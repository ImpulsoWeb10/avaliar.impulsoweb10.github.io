import crypto from 'crypto';

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

        // Requisição corrigida para a API de Pagamentos (Pix) do Mercado Pago
        const response = await fetch('https://api.mercadopago.com/v1/payments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenMP}`,
                'X-Idempotency-Key': crypto.randomUUID()
            },
            body: JSON.stringify({
                transaction_amount: parseFloat(valor),
                description: 'Pagamento - Tintas Qualy Quimy',
                payment_method_id: 'pix',
                payer: {
                    email: 'financeiro.qualyquimy@gmail.com',
                    first_name: 'Cliente',
                    last_name: 'Qualy Quimy'
                }
            })
        });

        const data = response.ok ? await response.json() : null;

        if (response.ok && data) {
            // Extrai o QR Code e o Copia e Cola da resposta correta do /v1/payments
            const pointOfInteraction = data.point_of_interaction;
            const qrCodeBase64 = pointOfInteraction?.transaction_data?.qr_code_base64;
            const copiaCola = pointOfInteraction?.transaction_data?.qr_code;

            if (qrCodeBase64 && copiaCola) {
                return res.status(200).json({
                    copiaCola: copiaCola,
                    qrCodeBase64: qrCodeBase64
                });
            } else {
                return res.status(500).json({ error: 'Dados do Pix não encontrados na resposta.', detalhes: data });
            }
        } else {
            return res.status(500).json({ error: 'Erro retornado pelo Mercado Pago.', detalhes: data });
        }

    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor do Pix.', detalhes: error.message });
    }
}
