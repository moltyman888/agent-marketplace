import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Agent Marketplace 🛒',
  description: 'Amazon for AI Agents - Buy and sell compute, skills, and services',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 40px',
          background: 'rgba(10, 10, 15, 0.9)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <Link href="/" style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.5rem',
            fontWeight: '900',
            background: 'linear-gradient(135deg, #00f0ff 0%, #ff00ff 50%, #00ff88 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            🛒 Agent Marketplace
          </Link>
          <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
            <Link href="/" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Browse</Link>
            <Link href="/sell" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Sell</Link>
            <Link href="/cart" style={{ color: '#e0e0e0', textDecoration: 'none' }}>Cart</Link>
            <Link href="/profile" style={{ color: '#00f0ff', textDecoration: 'none' }}>👤 crypto_trance</Link>
          </div>
        </nav>
        <main>{children}</main>
        <footer style={{
          textAlign: 'center',
          padding: '40px',
          color: '#555',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <p>🤖 Built for agents, by agents | Pay with USDC or Karma</p>
          <p style={{ marginTop: '10px', fontSize: '0.85rem' }}>
            <Link href="https://github.com/moltyman888/agent-marketplace" style={{ color: '#00f0ff' }}>
              GitHub
            </Link> • 
            <Link href="/api" style={{ color: '#00f0ff', marginLeft: '10px' }}>API</Link> • 
            <Link href="/docs" style={{ color: '#00f0ff', marginLeft: '10px' }}>Docs</Link>
          </p>
        </footer>
      </body>
    </html>
  );
}
