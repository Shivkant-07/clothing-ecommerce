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

    setTimeout(() => {
      setIsLoading(false);
      if (showToast) {
        showToast({
          type: 'success',
          message: 'Signed in successfully!'
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

  // Demo auto-fill: exactly matching user's screenshot
  const handleQuickFill = () => {
    setFormData({
      email: 'aakashbarasiya2001@gmail.com',
      password: 'Password123!',
      rememberMe: true,
    });
    setErrors({});
    setTouched({ email: true, password: true });
    if (showToast) {
      showToast({
        type: 'info',
        message: 'Demo credentials loaded.'
      });
    }
  };

  const isEmailSuccess = touched.email && !errors.email && formData.email.length > 0;
  const isPassError = touched.password && !!errors.password;
  const isEmailError = touched.email && !!errors.email;

  return (
    <div className="auth-form-body">
      {/* Subtitle & Quick Auto-fill */}
      <div className="auth-header-action">
        <p className="auth-subtitle-text">Sign in to your account</p>
        <button
          type="button"
          onClick={handleQuickFill}
          className="auth-demo-badge"
          title="Auto-fill demo credentials"
        >
          <SparklesIcon size={12} />
          <span>Demo Fill</span>
        </button>
      </div>

      {/* Form Elements */}
      <form onSubmit={handleSubmit} className="auth-fields-stack" noValidate>
        {/* Email Field */}
        <div className="auth-input-group">
          <label htmlFor="login-email" className="auth-field-label">
            EMAIL ADDRESS <span className="auth-field-asterisk">*</span>
          </label>
          <div className="auth-input-box">
            <span className="auth-box-icon">
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
              className={`auth-text-input ${isEmailError ? 'has-error' : ''} ${isEmailSuccess ? 'has-valid' : ''}`}
            />
            {isEmailSuccess && (
              <span className="auth-box-success" title="Valid email format">
                <CheckIcon size={14} />
              </span>
            )}
          </div>
          {isEmailError && (
            <div className="auth-error-alert" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Password Field */}
        <div className="auth-input-group">
          <label htmlFor="login-password" className="auth-field-label">
            PASSWORD <span className="auth-field-asterisk">*</span>
          </label>
          <div className="auth-input-box">
            <span className="auth-box-icon">
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
              placeholder="Enter your password"
              className={`auth-text-input ${isPassError ? 'has-error' : ''}`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="auth-box-toggle"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
            </button>
          </div>
          {isPassError && (
            <div className="auth-error-alert" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.password}</span>
            </div>
          )}
        </div>

        {/* Remember me & Forgot Password */}
        <div className="auth-options-flex">
          <label className="auth-remember-check">
            <input
              type="checkbox"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
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
                  message: 'Simulated password reset link dispatched.'
                });
              }
            }}
            className="auth-forgot-link"
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button with Arrow Icon */}
        <button
          type="submit"
          disabled={isLoading}
          className="auth-cta-button"
        >
          {isLoading ? (
            <>
              <span className="auth-btn-spinner" />
              <span>Signing In...</span>
            </>
          ) : (
            <>
              <span>→</span>
              <span>SIGN IN</span>
            </>
          )}
        </button>
      </form>

      {/* OR Divider */}
      <div className="auth-or-divider">
        <span className="auth-or-text">OR</span>
      </div>

      {/* Social SSO Buttons */}
      <div className="auth-sso-grid">
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
          className="auth-sso-btn"
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
          className="auth-sso-btn"
        >
          <AppleIcon size={16} />
          <span>Apple</span>
        </button>
      </div>

      {/* Switch to Register */}
      <p className="auth-bottom-switch">
        Don't have an account yet?
        <button
          type="button"
          onClick={onSwitchToRegister}
          className="auth-bottom-link"
        >
          Create Account →
        </button>
      </p>
    </div>
  );
}

export default LoginForm;
