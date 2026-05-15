'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '@/components/ui/Card';

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      window.location.href = '/login';
    }
  }, []);

  if (!user) return null;

  return (
    <div className="dashboard-layout">
      {/* Sidebar (Simplified) */}
      <aside className="dashboard-sidebar" style={{ width: '260px', background: 'white', borderRight: '1px solid var(--border)', height: '100vh', position: 'fixed' }}>
        <div style={{ padding: 'var(--space-5)', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '1.25rem' }}>ModernHospitality</h2>
        </div>
        <nav style={{ padding: 'var(--space-3)' }}>
          <div style={{ padding: 'var(--space-3)', borderRadius: 'var(--radius-md)', background: 'var(--surface)', fontWeight: 600 }}>Dashboard</div>
          <div style={{ padding: 'var(--space-3)', color: 'var(--text-muted)' }}>Reservations</div>
          <div style={{ padding: 'var(--space-3)', color: 'var(--text-muted)' }}>Inventory</div>
          <div style={{ padding: 'var(--space-3)', color: 'var(--text-muted)' }}>Organizations</div>
          <div style={{ padding: 'var(--space-3)', color: 'var(--text-muted)' }}>Settings</div>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ marginLeft: '260px', padding: 'var(--space-6)', background: 'var(--surface)', minHeight: '100vh' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
          <h1>Dashboard Overview</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <span>{user.name}</span>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {user.name.charAt(0)}
            </div>
          </div>
        </header>

        <div className="metric-card-grid">
          <Card className="metric-box">
            <p className="metric-label">Total Organizations</p>
            <p className="metric-value">1</p>
          </Card>
          <Card className="metric-box">
            <p className="metric-label">Total Users</p>
            <p className="metric-value">1</p>
          </Card>
          <Card className="metric-box">
            <p className="metric-label">Active Bookings</p>
            <p className="metric-value">0</p>
          </Card>
        </div>

        <section style={{ marginTop: 'var(--space-6)' }}>
          <Card style={{ padding: 'var(--space-6)' }}>
            <h3>Recent Activity</h3>
            <p style={{ color: 'var(--text-muted)', marginTop: 'var(--space-3)' }}>No recent activity to show.</p>
          </Card>
        </section>
      </main>
    </div>
  );
}
