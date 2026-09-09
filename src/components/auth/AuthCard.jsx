import { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './Auth.css';

export function AuthCard({ initialTab = 'login', onAuthSuccess }) {
  const [activeTab, setActiveTab] = useState(initialTab); // 'login' | 'register'
  const [toast, setToast] = useState(null);

  const showToast = ({ type = 'info', message }) => {
    setToast({ type, message });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleLoginSuccess = (userData) => {
    if (onAuthSuccess) {
      onAuthSuccess(userData);
    }
  };

  const handleRegisterSuccess = (userData) => {
    setTimeout(() => {
      setActiveTab('login');
    }, 1200);
    if (onAuthSuccess) {
      onAuthSuccess(userData);
    }
  };

  return (
    <div className="auth-page-root">
      {/* Ambient background glow blurs */}
      <div className="auth-glow-top" />
      <div className="auth-glow-bottom" />

      {/* Floating Toast Notification */}
      {toast && (
        <div className={`auth-floating-toast toast-${toast.type}`} role="status">
          <span>{toast.message}</span>
        </div>
      )}

      {/* Centered Auth Card */}
      <div className="auth-card-container">
        <div className="auth-card">
          {/* Top Tab Pill Selector: SIGN IN / CREATE ACCOUNT */}
          <div className="auth-tabs-pill" role="tablist">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'login'}
              onClick={() => setActiveTab('login')}
              className={`auth-tab-option ${activeTab === 'login' ? 'active' : ''}`}
            >
              SIGN IN
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'register'}
              onClick={() => setActiveTab('register')}
              className={`auth-tab-option ${activeTab === 'register' ? 'active' : ''}`}
            >
              CREATE ACCOUNT
            </button>
          </div>

          {/* Active Tab View */}
          {activeTab === 'login' ? (
            <LoginForm
              onSwitchToRegister={() => setActiveTab('register')}
              onLoginSuccess={handleLoginSuccess}
              showToast={showToast}
            />
          ) : (
            <RegisterForm
              onSwitchToLogin={() => setActiveTab('login')}
              onRegisterSuccess={handleRegisterSuccess}
              showToast={showToast}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthCard;
