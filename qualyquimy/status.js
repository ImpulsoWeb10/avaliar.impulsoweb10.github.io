import { kv } from '@vercel/kv';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: 'ID necessario' });
    }

    // Procura no banco se o status ja mudou para pago
    const status = await kv.get(`pix:${id}`);

    if (status === 'pago') {
      return res.status(200).json({ pago: true });
    }

    return res.status(200).json({ pago: false });
  }
  return res.status(405).end();
}
