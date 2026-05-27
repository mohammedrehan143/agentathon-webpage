import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { supabase } from '../lib/supabase';

interface TeamSelection {
  name: string;
  email: string;
  ps_id: number;
  created_at: string;
}

const Admin: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selections, setSelections] = useState<TeamSelection[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const ADMIN_PASSWORD = 'admin'; // Changed to 'admin'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchData();
    } else {
      alert('Incorrect password');
    }
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('agentathon')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSelections(data?.map(row => ({
        name: row.team_name,
        email: row.email,
        ps_id: row.ps_id,
        created_at: row.created_at
      })) || []);
    } catch (err: any) {
      console.error('Error fetching data details:', err);
      if (err.message) console.error('Message:', err.message);
      if (err.details) console.error('Details:', err.details);
      if (err.hint) console.error('Hint:', err.hint);
      alert('Failed to load data: ' + (err.message || 'Unknown error'));
    } finally {
      setIsLoading(false);
    }
  };

  const formatDateTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-IN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const exportToExcel = () => {
    const data = selections.map(team => ({
      'Team Name': team.name,
      'Email ID': team.email,
      'Problem Statement': `PS${team.ps_id}`,
      'Selection Time': formatDateTime(team.created_at)
    }));

    if (data.length === 0) {
      alert('No data to export.');
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Selections");
    XLSX.writeFile(workbook, "data.xls");
  };

  if (!isAuthenticated) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'grid', 
        placeItems: 'center', 
        background: '#fafafa',
        fontFamily: 'DM Sans, sans-serif'
      }}>
        <form onSubmit={handleLogin} style={{
          background: '#fff',
          padding: '40px',
          borderRadius: '24px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          <h2 style={{ marginBottom: '24px', textAlign: 'center', font: 'Bebas Neue, sans-serif', fontSize: '32px' }}>Admin Login</h2>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid #ddd',
                fontSize: '16px'
              }}
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: '48px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'DM Sans, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px' }}>
        <h1 style={{ font: 'Bebas Neue, sans-serif', fontSize: '48px' }}>Admin Dashboard</h1>
        <div style={{ display: 'flex', gap: '16px' }}>
          <button onClick={fetchData} className="btn-ghost" disabled={isLoading}>
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </button>
          <button onClick={exportToExcel} className="btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
            Download data.xls
          </button>
        </div>
      </div>

      <div style={{ background: '#fff', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#f5f5f5', textAlign: 'left' }}>
              <th style={{ padding: '16px 24px' }}>Team Name</th>
              <th style={{ padding: '16px 24px' }}>Email</th>
              <th style={{ padding: '16px 24px' }}>Problem Statement</th>
              <th style={{ padding: '16px 24px' }}>Selection Time</th>
            </tr>
          </thead>
          <tbody>
            {selections.map((team, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '16px 24px' }}>{team.name}</td>
                <td style={{ padding: '16px 24px' }}>{team.email}</td>
                <td style={{ padding: '16px 24px' }}>PS{team.ps_id}</td>
                <td style={{ padding: '16px 24px' }}>{formatDateTime(team.created_at)}</td>
              </tr>
            ))}
            {selections.length === 0 && !isLoading && (
              <tr>
                <td colSpan={3} style={{ padding: '48px', textAlign: 'center', color: '#999' }}>No registrations yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;
