import { useState } from 'react';
import { validateEmail, validatePassword } from '../../utils/validation';
import {
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
  AlertCircleIcon,
  SparklesIcon,
  GoogleIcon,
  AppleIcon
} from './Icons';
import './Auth.css';

export function LoginForm({ onSwitchToRegister, onLoginSuccess, showToast }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: true,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalVal = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: finalVal,
    }));

    if (touched[name]) {
      validateField(name, finalVal);
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const finalVal = type === 'checkbox' ? checked : value;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, finalVal);
  };

  const validateField = (name, value) => {
    let errorMsg = '';
    if (name === 'email') {
      const res = validateEmail(value);
      if (!res.isValid) errorMsg = res.message;
    } else if (name === 'password') {
      const res = validatePassword(value);
      if (!res.isValid) errorMsg = res.message;
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return !errorMsg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ email: true, password: true });

    const isEmailValid = validateField('email', formData.email);
    const isPassValid = validateField('password', formData.password);

    if (!isEmailValid || !isPassValid) {
      if (showToast) {
        showToast({
          type: 'error',
          message: 'Please resolve the highlighted errors in the form.'
        });
      }
      return;
    }

    setIsLoading(true);

    // Client-side simulated authentication flow
    setTimeout(() => {
      setIsLoading(false);
      if (showToast) {
        showToast({
          type: 'success',
          message: 'Signed in successfully! (Frontend flow verified)'
        });
      }
      if (onLoginSuccess) {
        onLoginSuccess({
          email: formData.email,
          name: formData.email.split('@')[0],
        });
      }
    }, 850);
  };

  const handleQuickFill = () => {
    setFormData({
      email: 'alex@example.com',
      password: 'Password123!',
      rememberMe: true,
    });
    setErrors({});
    setTouched({ email: true, password: true });
    if (showToast) {
      showToast({
        type: 'info',
        message: 'Sample login credentials populated.'
      });
    }
  };

  const isEmailSuccess = touched.email && !errors.email && formData.email.length > 0;
  const isPassError = touched.password && !!errors.password;
  const isEmailError = touched.email && !!errors.email;

  return (
    <div className="auth-form-container">
      {/* Subtitle & Quick Auto-fill */}
      <div className="auth-header-row">
        <p className="auth-subtitle">Sign in to your account</p>
        <button
          type="button"
          onClick={handleQuickFill}
          className="auth-demo-btn"
          title="Fill valid test credentials in one click"
        >
          <SparklesIcon size={12} />
          <span>Demo Fill</span>
        </button>
      </div>

      {/* Form Elements */}
      <form onSubmit={handleSubmit} className="auth-form" noValidate>
        {/* Email Field */}
        <div className="auth-field">
          <label htmlFor="login-email" className="auth-label">
            <span>
              Email Address<span className="auth-required">*</span>
            </span>
          </label>
          <div className="auth-input-container">
            <span className="auth-input-icon">
              <MailIcon size={16} />
            </span>
            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. alex@example.com"
              className={`auth-input ${isEmailError ? 'is-error' : ''} ${isEmailSuccess ? 'is-valid' : ''}`}
            />
            {isEmailSuccess && (
              <span className="auth-input-check" title="Valid email format">
                <CheckIcon size={14} />
              </span>
            )}
          </div>
          {isEmailError && (
            <div className="auth-error-text" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Password Field */}
        <div className="auth-field">
          <label htmlFor="login-password" className="auth-label">
            <span>
              Password<span className="auth-required">*</span>
            </span>
          </label>
          <div className="auth-input-container">
            <span className="auth-input-icon">
              <LockIcon size={16} />
            </span>
            <input
              id="login-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="current-password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password (min 8 chars)"
              className={`auth-input ${isPassError ? 'is-error' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="auth-input-action"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          </div>
          {isPassError && (
            <div className="auth-error-text" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.password}</span>
            </div>
          )}
        </div>

        {/* Remember me & Forgot Password */}
        <div className="auth-options-row">
          <label className="auth-checkbox-label">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="auth-checkbox-input"
            />
            <span>Remember me</span>
          </label>
          <a
            href="#forgot-password"
            onClick={(e) => {
              e.preventDefault();
              if (showToast) {
                showToast({
                  type: 'info',
                  message: 'Simulated password recovery link dispatched to your email.'
                });
              }
            }}
            className="auth-link"
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="auth-submit-btn"
        >
          {isLoading ? (
            <>
              <span className="auth-spinner" />
              <span>Signing In...</span>
            </>
          ) : (
            <span>Sign In</span>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="auth-divider">
        <span className="auth-divider-text">OR</span>
      </div>

      {/* Social Buttons */}
      <div className="auth-social-grid">
        <button
          type="button"
          disabled={isLoading}
          onClick={() => {
            if (showToast) {
              showToast({
                type: 'info',
                message: 'Connecting via Google SSO...'
              });
            }
          }}
          className="auth-social-btn"
        >
          <GoogleIcon size={16} />
          <span>Google</span>
        </button>

        <button
          type="button"
          disabled={isLoading}
          onClick={() => {
            if (showToast) {
              showToast({
                type: 'info',
                message: 'Connecting via Apple SSO...'
              });
            }
          }}
          className="auth-social-btn"
        >
          <AppleIcon size={16} />
          <span>Apple</span>
        </button>
      </div>

      {/* Switch to Register */}
      <p className="auth-switch-text">
        Don't have an account yet?
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="auth-switch-btn"
        >
          Create Account
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
