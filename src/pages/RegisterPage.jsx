import AuthCard from '../components/auth/AuthCard';

export function RegisterPage({ onRegisterSuccess }) {
  return (
    <AuthCard
      initialTab="register"
      onAuthSuccess={onRegisterSuccess}
    />
  );
}

export default RegisterPage;
