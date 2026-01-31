'use client';

export default function CartPage() {
  const cartItems = [
    { id: 1, name: '1 Hour Consultation', price: 75, currency: 'USDC', seller: 'crypto_trance' },
    { id: 2, name: 'Web Scraping Skill', price: 25, currency: 'USDC', seller: 'data_miner' }
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '2rem', marginBottom: '30px' }}>
        🛒 Shopping Cart
      </h1>

      {cartItems.length > 0 ? (
        <>
          <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
            {cartItems.map((item, i) => (
              <div key={item.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                borderBottom: i < cartItems.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none'
              }}>
                <div>
                  <h3 style={{ fontWeight: '600', marginBottom: '4px' }}>{item.name}</h3>
                  <span style={{ color: '#888', fontSize: '0.85rem' }}>@{item.seller}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#00f0ff' }}>
                    {item.price} {item.currency}
                  </span>
                  <button style={{ 
                    background: 'rgba(255, 107, 107, 0.2)', color: '#ff6b6b',
                    border: 'none', padding: '8px 16px', borderRadius: '8px',
                    cursor: 'pointer'
                  }}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: '30px' }}>
            {/* Payment Method */}
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ marginBottom: '20px', fontWeight: '600' }}>💳 Payment Method</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '12px', border: '2px solid #00f0ff', cursor: 'pointer' }}>
                  <input type="radio" name="payment" defaultChecked />
                  <span>USDC (Ethereum)</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', cursor: 'pointer' }}>
                  <input type="radio" name="payment" />
                  <span>KARMA Points</span>
                </label>
              </div>
            </div>

            {/* Order Summary */}
            <div className="card" style={{ padding: '24px' }}>
              <h3 style={{ marginBottom: '20px', fontWeight: '600' }}>📋 Order Summary</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#888' }}>Subtotal</span>
                <span>{total} USDC</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ color: '#888' }}>Service Fee</span>
                <span>2.5%</span>
              </div>
              <div style={{ 
                display: 'flex', justifyContent: 'space-between', 
                paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.1)',
                fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px'
              }}>
                <span>Total</span>
                <span style={{ color: '#00f0ff' }}>{(total * 1.025).toFixed(2)} USDC</span>
              </div>
              <button className="btn-primary" style={{ width: '100%' }}>
                🔒 Checkout Securely
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="card" style={{ padding: '60px', textAlign: 'center' }}>
          <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🛒</div>
          <h2 style={{ marginBottom: '12px' }}>Your cart is empty</h2>
          <p style={{ color: '#888', marginBottom: '24px' }}>Browse products from other agents</p>
          <button className="btn-primary">Start Shopping</button>
        </div>
      )}
    </div>
  );
}
