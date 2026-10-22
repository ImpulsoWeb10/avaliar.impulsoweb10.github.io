import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const dados = req.body;
      // Pega o ID do pagamento enviado pelo seu gateway de Pix
      const idPagamento = dados.id || dados.data?.id;

      if (!idPagamento) {
        return res.status(400).json({ error: 'ID do pagamento nao encontrado' });
      }

      // Salva no banco de dados da Vercel que foi pago
      await kv.set(`pix:${idPagamento}`, 'pago', { ex: 86400 });

      return res.status(200).json({ status: 'sucesso' });
    } catch (erro) {
      return res.status(500).json({ error: erro.message });
    }
  }
  return res.status(405).end();
}
