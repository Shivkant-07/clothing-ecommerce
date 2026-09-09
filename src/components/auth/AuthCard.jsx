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
    // Automatically switch to login tab after brief delay
    setTimeout(() => {
      setActiveTab('login');
    }, 1200);
    if (onAuthSuccess) {
      onAuthSuccess(userData);
    }
  };

  return (
    <div className="auth-wrapper">
      {/* Toast Notification */}
      {toast && (
        <div className={`auth-toast toast-${toast.type}`} role="status">
          <span>{toast.message}</span>
        </div>
      )}

      <div className="auth-card">
        {/* Animated Tabs: Sign In / Create Account */}
        <div className="auth-tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'login'}
            onClick={() => setActiveTab('login')}
            className={`auth-tab-btn ${activeTab === 'login' ? 'active' : ''}`}
          >
            Sign In
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'register'}
            onClick={() => setActiveTab('register')}
            className={`auth-tab-btn ${activeTab === 'register' ? 'active' : ''}`}
          >
            Create Account
          </button>
        </div>

        {/* Content based on active tab */}
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
  );
}

export default AuthCard;
