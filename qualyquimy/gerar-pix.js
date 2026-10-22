// Exemplo em Node.js para rodar em uma Serverless Function (Vercel / Render)
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Método não permitido');

    const { valor } = req.body;
    if (!valor || valor <= 0) return res.status(400).json({ error: 'Valor inválido' });

    try {
        const response = await fetch('https://mercadopago.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer SEU_ACCESS_TOKEN_AQUI', // <--- Cole aqui seu Access Token de produção
                'X-Idempotency-Key': crypto.randomUUID() // Evita duplicar pagamentos por oscilação de rede
            },
            body: JSON.stringify({
                processing_mode: "automatic",
                data: {
                    transaction_amount: parseFloat(valor),
                    description: 'Pagamento Tintas Qualy Quimy',
                    payment_method_id: 'pix',
                    payer: {
                        email: 'financeiro.qualyquimy@gmail.com' // Seu e-mail de controle ou do cliente
                    }
                }
            })
        });

        const data = await response.json();

        // Se a ordem foi criada com sucesso, devolve os dados do Pix para a sua página no GitHub
        if (response.ok) {
            return res.status(200).json({
                copiaCola: data.point_of_interaction.transaction_data.qr_code,
                qrCodeBase64: data.point_of_interaction.transaction_data.qr_code_base64
            });
        } else {
            return res.status(500).json({ error: 'Erro no Mercado Pago', detalhes: data });
        }
    } catch (error) {
        return res.status(500).json({ error: 'Erro interno no servidor' });
    }
}
