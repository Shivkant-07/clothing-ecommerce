import AuthCard from '../components/auth/AuthCard';

export function LoginPage({ onLoginSuccess }) {
  return (
    <AuthCard
      initialTab="login"
      onAuthSuccess={onLoginSuccess}
    />
  );
}

export default LoginPage;
