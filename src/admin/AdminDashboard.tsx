// src/AdminDashboard.tsx
import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { ref, onValue, update } from 'firebase/database';

interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  careLevel: string;
  message: string;
  status: 'pending' | 'contacted';
  submittedAt: string;
}

export default function AdminDashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. Monitor user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. Fetch inquiries from database in real-time when authenticated
  useEffect(() => {
    if (!user) return;

    const inquiriesRef = ref(db, 'inquiries');
    const unsubscribe = onValue(inquiriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const formattedList: Inquiry[] = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        })).sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()); // Newest first
        
        setInquiries(formattedList);
      } else {
        setInquiries([]);
      }
    });

    return () => unsubscribe();
  }, [user]);

  // 3. Handle Admin Login
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert("Invalid login credentials.");
    }
  };

  // 4. Handle Logout
  const handleLogout = () => signOut(auth);

  // 5. Update Status ('pending' <-> 'contacted')
  const toggleStatus = async (id: string, currentStatus: 'pending' | 'contacted') => {
    const nextStatus = currentStatus === 'pending' ? 'contacted' : 'pending';
    try {
      const inquiryRef = ref(db, `inquiries/${id}`);
      await update(inquiryRef, { status: nextStatus });
    } catch (error) {
      alert("Failed to update status.");
    }
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading...</div>;

  // VIEW 1: Login Screen (If not authenticated)
  if (!user) {
    return (
      <div style={{ maxWidth: '400px', margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2>Lyndel AFH Staff Login</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <input type="email" placeholder="Staff Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '8px' }} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '8px' }} />
          <button type="submit" style={{ padding: '10px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Login</button>
        </form>
      </div>
    );
  }

  // VIEW 2: Dashboard Layout (If authenticated)
  return (
    <div style={{ padding: '30px', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Lyndel AFH Inquiry Dashboard</h1>
        <button onClick={handleLogout} style={{ padding: '8px 15px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Log Out</button>
      </div>

      {inquiries.length === 0 ? (
        <p>No inquiries found in the database.</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <thead>
            <tr style={{ background: '#f4f4f4', textAlign: 'left', borderBottom: '2px solid #ddd' }}>
              <th style={{ padding: '12px' }}>Date</th>
              <th style={{ padding: '12px' }}>Resident Info</th>
              <th style={{ padding: '12px' }}>Care Level Requested</th>
              <th style={{ padding: '12px' }}>Message</th>
              <th style={{ padding: '12px' }}>Status</th>
              <th style={{ padding: '12px' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((item) => (
              <tr key={item.id} style={{ borderBottom: '1px solid #eee', background: item.status === 'pending' ? '#fff9e6' : 'transparent' }}>
                <td style={{ padding: '12px', fontSize: '14px' }}>{new Date(item.submittedAt).toLocaleDateString()}</td>
                <td style={{ padding: '12px' }}>
                  <strong>{item.name}</strong><br />
                  <span style={{ fontSize: '13px', color: '#555' }}>{item.phone}</span><br />
                  <span style={{ fontSize: '13px', color: '#555' }}>{item.email}</span>
                </td>
                <td style={{ padding: '12px' }}><span style={{ background: '#e9ecef', padding: '4px 8px', borderRadius: '4px', fontSize: '13px' }}>{item.careLevel || 'Not Specified'}</span></td>
                <td style={{ padding: '12px', maxWidth: '300px', fontSize: '14px' }}>{item.message}</td>
                <td style={{ padding: '12px' }}>
                  <span style={{ 
                    padding: '4px 8px', 
                    borderRadius: '12px', 
                    fontSize: '12px', 
                    fontWeight: 'bold',
                    background: item.status === 'pending' ? '#ffc107' : '#28a745',
                    color: item.status === 'pending' ? '#000' : '#fff'
                  }}>
                    {item.status.toUpperCase()}
                  </span>
                </td>
                <td style={{ padding: '12px' }}>
                  <button 
                    onClick={() => toggleStatus(item.id, item.status)}
                    style={{ padding: '6px 12px', cursor: 'pointer', borderRadius: '4px', border: '1px solid #ccc' }}
                  >
                    Mark as {item.status === 'pending' ? 'Contacted' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}