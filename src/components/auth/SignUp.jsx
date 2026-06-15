import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signUp } from '../../auth';
import { Mail, Lock, User, AlertCircle, Loader2, CheckCircle2 } from 'lucide-react';
import './auth.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }

    setLoading(true);

    try {
      const { error: signUpError } = await signUp.email({
        email,
        password,
        name,
      });

      if (signUpError) {
        throw new Error(signUpError.message || 'Erro ao criar conta. Esse email pode já estar em uso.');
      }
      
      setSuccess(true);
      setTimeout(() => router.push('/login'), 2500);
      
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="auth-container">
        <div className="auth-card" style={{ textAlign: 'center' }}>
          <div className="auth-logo" style={{ borderColor: 'var(--green-dim)', boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}>
            <CheckCircle2 style={{ color: 'var(--green)' }} size={32} />
          </div>
          <h2 className="auth-title">Conta Criada!</h2>
          <p className="auth-subtitle">Redirecionando para o login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        
        <h2 className="auth-title">Criar Conta</h2>
        <p className="auth-subtitle">Junte-se à Guilda no DMW Dashboard</p>

        {error && (
          <div className="auth-error">
            <AlertCircle size={20} />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="form-group">
            <label className="form-label">Seu Nome / Nick no Jogo</label>
            <div style={{ position: 'relative' }}>
              <User className="auth-input-icon" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input auth-input"
                placeholder="TamerName"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email</label>
            <div style={{ position: 'relative' }}>
              <Mail className="auth-input-icon" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input auth-input"
                placeholder="seu@email.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Senha (Mínimo 6 caracteres)</label>
            <div style={{ position: 'relative' }}>
              <Lock className="auth-input-icon" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input auth-input"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', padding: '12px' }}
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : 'Criar Conta'}
          </button>
        </form>

        <div className="auth-footer">
          Já faz parte da Guilda?{' '}
          <Link href="/login" className="auth-link">
            Entrar
          </Link>
        </div>
      </div>
    </div>
  );
}
