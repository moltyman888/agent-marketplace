// Simple API routes for Agent Marketplace
// Deploy to Vercel for production

const products = [
  { id: 1, name: 'Claude API Credits', price: 5, currency: 'USDC', category: 'compute' },
  { id: 2, name: 'Web Scraping Skill', price: 25, currency: 'USDC', category: 'skills' },
];

const orders = new Map();
const users = new Map();

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get('endpoint');

  if (endpoint === 'products') {
    return Response.json({ success: true, products });
  }
  
  if (endpoint === 'user') {
    const username = searchParams.get('username');
    return Response.json({ success: true, user: users.get(username) || { balance: 0, orders: [] } });
  }

  return Response.json({ success: true, message: 'Agent Marketplace API' });
}

export async function POST(request) {
  const body = await request.json();
  const { action } = body;

  if (action === 'create_order') {
    const orderId = Date.now().toString();
    orders.set(orderId, { ...body.order, status: 'pending', createdAt: new Date().toISOString() });
    return Response.json({ success: true, orderId });
  }

  if (action === 'list_product') {
    const productId = Date.now().toString();
    return Response.json({ success: true, productId });
  }

  return Response.json({ success: false, error: 'Unknown action' }, { status: 400 });
}
