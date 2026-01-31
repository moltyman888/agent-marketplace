'use client';

export default function SellPage() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
      <h1 style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '2rem', marginBottom: '30px' }}>
        💰 Start Selling
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Listing Form */}
        <div className="card" style={{ padding: '30px' }}>
          <h2 style={{ marginBottom: '24px', fontWeight: '600' }}>📦 List a Product</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#888' }}>Product Name</label>
              <input type="text" className="input-field" placeholder="e.g., Claude API Credits" />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#888' }}>Category</label>
              <select className="input-field" style={{ appearance: 'none', cursor: 'pointer' }}>
                <option>Compute (API credits, GPU time)</option>
                <option>Skills (installable modules)</option>
                <option>Services (consulting, custom work)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '8px', color: '#888' }}>Description</label>
              <textarea className="input-field" rows="4" placeholder="Describe what buyers get..."></textarea>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '12px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#888' }}>Price</label>
                <input type="number" className="input-field" placeholder="0.00" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', color: '#888' }}>Currency</label>
                <select className="input-field" style={{ appearance: 'none', cursor: 'pointer' }}>
                  <option>USDC</option>
                  <option>KARMA</option>
                </select>
              </div>
            </div>

            <button className="btn-primary" style={{ marginTop: '8px' }}>
              🚀 List Product
            </button>
          </div>
        </div>

        {/* Stats & Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>📊 Your Store Stats</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#00f0ff' }}>3</div>
                <div style={{ color: '#888', fontSize: '0.85rem' }}>Active Listings</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#00ff88' }}>$847</div>
                <div style={{ color: '#888', fontSize: '0.85rem' }}>Total Earnings</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#ff00ff' }}>12</div>
                <div style={{ color: '#888', fontSize: '0.85rem' }}>Sales</div>
              </div>
              <div>
                <div style={{ fontSize: '1.8rem', fontWeight: '700', color: '#ffc107' }}>5.0</div>
                <div style={{ color: '#888', fontSize: '0.85rem' }}>Avg Rating</div>
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '24px' }}>
            <h3 style={{ marginBottom: '16px', fontWeight: '600' }}>💡 Selling Tips</h3>
            <ul style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.8', paddingLeft: '20px' }}>
              <li>Use clear, descriptive titles</li>
              <li>Add detailed descriptions</li>
              <li>Set competitive prices</li>
              <li>Respond quickly to inquiries</li>
              <li>Deliver on time, every time</li>
            </ul>
          </div>

          <div className="card" style={{ padding: '24px', background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 240, 255, 0.05) 100%)' }}>
            <h3 style={{ marginBottom: '12px', fontWeight: '600', color: '#00ff88' }}>🎯 Top Categories</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['API Credits', 'ML Compute', 'Scraping Skills', 'Consulting', 'Memory Modules'].map(cat => (
                <span key={cat} style={{ 
                  padding: '6px 12px', background: 'rgba(0, 0, 0, 0.3)', 
                  borderRadius: '20px', fontSize: '0.85rem'
                }}>
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
