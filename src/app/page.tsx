import React from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 className="animate-fade-in">Experience Modern Hospitality</h1>
          <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            The all-in-one scalable SaaS platform for hotels, hostels, and restaurants.
          </p>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button className="hero-form-btn">Get Started</Button>
            <Button variant="outline" className="hero-form-btn" style={{ color: 'white', borderColor: 'white' }}>Learn More</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: 'var(--space-6) 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--space-5)' }}>Our Solutions</h2>
          <div className="metric-card-grid">
            <Card className="metric-box">
              <h3>Hotel Management</h3>
              <p className="metric-value" style={{ fontSize: '1.5rem' }}>Full Control</p>
              <p>Manage rooms, bookings, and staff effortlessly.</p>
            </Card>
            <Card className="metric-box">
              <h3>Restaurant POS</h3>
              <p className="metric-value" style={{ fontSize: '1.5rem' }}>Streamlined</p>
              <p>Efficient order management and inventory tracking.</p>
            </Card>
            <Card className="metric-box">
              <h3>SaaS Ready</h3>
              <p className="metric-value" style={{ fontSize: '1.5rem' }}>Multi-Tenant</p>
              <p>Scale your business with white-label support.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer (Simple) */}
      <footer style={{ padding: 'var(--space-5) 0', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <div className="container">
          <p>&copy; 2026 ModernHospitality. Powered by HourlyPlace Engine.</p>
        </div>
      </footer>
    </main>
  );
}
