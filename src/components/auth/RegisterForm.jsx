import { useState } from 'react';
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  getPasswordStrength,
} from '../../utils/validation';
import {
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
  AlertCircleIcon,
  SparklesIcon,
  GoogleIcon,
  AppleIcon,
} from './Icons';
import './Auth.css';

export function RegisterForm({ onSwitchToLogin, onRegisterSuccess, showToast }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const finalVal = type === 'checkbox' ? checked : value;

    const nextFormData = {
      ...formData,
      [name]: finalVal,
    };

    setFormData(nextFormData);

    if (touched[name]) {
      validateField(name, finalVal, nextFormData);
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const finalVal = type === 'checkbox' ? checked : value;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, finalVal, formData);
  };

  const validateField = (name, value, currentFormData = formData) => {
    let errorMsg = '';

    if (name === 'fullName') {
      const res = validateFullName(value);
      if (!res.isValid) errorMsg = res.message;
    } else if (name === 'email') {
      const res = validateEmail(value);
      if (!res.isValid) errorMsg = res.message;
    } else if (name === 'password') {
      const res = validatePassword(value);
      if (!res.isValid) errorMsg = res.message;
      if (touched.confirmPassword && currentFormData.confirmPassword) {
        const matchRes = validateConfirmPassword(value, currentFormData.confirmPassword);
        setErrors((prev) => ({
          ...prev,
          confirmPassword: matchRes.isValid ? '' : matchRes.message,
        }));
      }
    } else if (name === 'confirmPassword') {
      const res = validateConfirmPassword(currentFormData.password, value);
      if (!res.isValid) errorMsg = res.message;
    } else if (name === 'agreeTerms') {
      if (!value) {
        errorMsg = 'You must agree to the Terms of Service to continue';
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return !errorMsg;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
      agreeTerms: true,
    });

    const isNameValid = validateField('fullName', formData.fullName, formData);
    const isEmailValid = validateField('email', formData.email, formData);
    const isPassValid = validateField('password', formData.password, formData);
    const isConfirmValid = validateField('confirmPassword', formData.confirmPassword, formData);
    const isTermsValid = validateField('agreeTerms', formData.agreeTerms, formData);

    if (!isNameValid || !isEmailValid || !isPassValid || !isConfirmValid || !isTermsValid) {
      if (showToast) {
        showToast({
          type: 'error',
          message: 'Please resolve the highlighted errors in the form.',
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
          message: 'Account created successfully! Redirecting to sign in...',
        });
      }
      if (onRegisterSuccess) {
        onRegisterSuccess({
          email: formData.email,
          name: formData.fullName,
        });
      }
    }, 950);
  };

  const handleQuickFill = () => {
    setFormData({
      fullName: 'Alex Johnson',
      email: 'alex@example.com',
      password: 'Password123!',
      confirmPassword: 'Password123!',
      agreeTerms: true,
    });
    setErrors({});
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
      agreeTerms: true,
    });
    if (showToast) {
      showToast({
        type: 'info',
        message: 'Sample registration data populated.',
      });
    }
  };

  const isNameSuccess = touched.fullName && !errors.fullName && formData.fullName.length >= 2;
  const isEmailSuccess = touched.email && !errors.email && formData.email.length > 0;
  const isConfirmSuccess =
    touched.confirmPassword &&
    !errors.confirmPassword &&
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  const strength = getPasswordStrength(formData.password);

  return (
    <div className="auth-form-body">
      {/* Subtitle & Quick Auto-fill */}
      <div className="auth-header-action">
        <p className="auth-subtitle-text">Create a new account</p>
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

      {/* Form */}
      <form onSubmit={handleSubmit} className="auth-fields-stack" noValidate>
        {/* Full Name */}
        <div className="auth-input-group">
          <label htmlFor="register-name" className="auth-field-label">
            FULL NAME <span className="auth-field-asterisk">*</span>
          </label>
          <div className="auth-input-box">
            <span className="auth-box-icon">
              <UserIcon size={16} />
            </span>
            <input
              id="register-name"
              name="fullName"
              type="text"
              autoComplete="name"
              value={formData.fullName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. Alex Johnson"
              className={`auth-text-input ${touched.fullName && errors.fullName ? 'has-error' : ''} ${isNameSuccess ? 'has-valid' : ''}`}
            />
            {isNameSuccess && (
              <span className="auth-box-success" title="Valid name">
                <CheckIcon size={14} />
              </span>
            )}
          </div>
          {touched.fullName && errors.fullName && (
            <div className="auth-error-alert" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.fullName}</span>
            </div>
          )}
        </div>

        {/* Email Address */}
        <div className="auth-input-group">
          <label htmlFor="register-email" className="auth-field-label">
            EMAIL ADDRESS <span className="auth-field-asterisk">*</span>
          </label>
          <div className="auth-input-box">
            <span className="auth-box-icon">
              <MailIcon size={16} />
            </span>
            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. alex@example.com"
              className={`auth-text-input ${touched.email && errors.email ? 'has-error' : ''} ${isEmailSuccess ? 'has-valid' : ''}`}
            />
            {isEmailSuccess && (
              <span className="auth-box-success" title="Valid email format">
                <CheckIcon size={14} />
              </span>
            )}
          </div>
          {touched.email && errors.email && (
            <div className="auth-error-alert" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.email}</span>
            </div>
          )}
        </div>

        {/* Create Password */}
        <div className="auth-input-group">
          <label htmlFor="register-password" className="auth-field-label">
            CREATE PASSWORD <span className="auth-field-asterisk">*</span>
          </label>
          <div className="auth-input-box">
            <span className="auth-box-icon">
              <LockIcon size={16} />
            </span>
            <input
              id="register-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Min 8 characters"
              className={`auth-text-input ${touched.password && errors.password ? 'has-error' : ''}`}
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
          {touched.password && errors.password && (
            <div className="auth-error-alert" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.password}</span>
            </div>
          )}

          {/* Dynamic Password Strength Meter */}
          {formData.password && (
            <div className="auth-meter-wrap">
              <div className="auth-meter-text">
                <span>Password strength:</span>
                <span className="auth-meter-rating">{strength.label}</span>
              </div>
              <div className="auth-meter-bars">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`auth-meter-bar ${
                      strength.score >= step ? `tier-${strength.score}` : ''
                    }`}
                  />
                ))}
              </div>
              <div className="auth-meter-rules">
                <div className={`auth-rule-item ${strength.criteria.length ? 'rule-met' : ''}`}>
                  <CheckIcon size={11} />
                  <span>8+ characters</span>
                </div>
                <div className={`auth-rule-item ${strength.criteria.uppercase ? 'rule-met' : ''}`}>
                  <CheckIcon size={11} />
                  <span>Uppercase letter</span>
                </div>
                <div className={`auth-rule-item ${strength.criteria.number ? 'rule-met' : ''}`}>
                  <CheckIcon size={11} />
                  <span>Number (0-9)</span>
                </div>
                <div className={`auth-rule-item ${strength.criteria.special ? 'rule-met' : ''}`}>
                  <CheckIcon size={11} />
                  <span>Special character</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div className="auth-input-group">
          <label htmlFor="register-confirm" className="auth-field-label">
            CONFIRM PASSWORD <span className="auth-field-asterisk">*</span>
          </label>
          <div className="auth-input-box">
            <span className="auth-box-icon">
              <LockIcon size={16} />
            </span>
            <input
              id="register-confirm"
              name="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Re-enter your password"
              className={`auth-text-input ${touched.confirmPassword && errors.confirmPassword ? 'has-error' : ''} ${isConfirmSuccess ? 'has-valid' : ''}`}
            />
            {isConfirmSuccess ? (
              <span className="auth-box-success" title="Passwords match">
                <CheckIcon size={14} />
              </span>
            ) : (
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="auth-box-toggle"
                aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
              >
                {showConfirmPassword ? <EyeOffIcon size={16} /> : <EyeIcon size={16} />}
              </button>
            )}
          </div>
          {touched.confirmPassword && errors.confirmPassword && (
            <div className="auth-error-alert" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.confirmPassword}</span>
            </div>
          )}
        </div>

        {/* Terms of Service Checkbox */}
        <div className="auth-input-group">
          <label className="auth-terms-box">
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span>
              I agree to the{' '}
              <a
                href="#terms"
                onClick={(e) => e.preventDefault()}
              >
                Terms of Service
              </a>{' '}
              and{' '}
              <a
                href="#privacy"
                onClick={(e) => e.preventDefault()}
              >
                Privacy Policy
              </a>
            </span>
          </label>
          {touched.agreeTerms && errors.agreeTerms && (
            <div className="auth-error-alert" role="alert">
              <AlertCircleIcon size={13} />
              <span>{errors.agreeTerms}</span>
            </div>
          )}
        </div>

        {/* Submit Button with Checkmark Icon */}
        <button
          type="submit"
          disabled={isLoading}
          className="auth-cta-button"
        >
          {isLoading ? (
            <>
              <span className="auth-btn-spinner" />
              <span>Creating Account...</span>
            </>
          ) : (
            <>
              <CheckIcon size={15} />
              <span>CREATE ACCOUNT</span>
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
                message: 'Connecting via Google SSO...',
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
                message: 'Connecting via Apple SSO...',
              });
            }
          }}
          className="auth-sso-btn"
        >
          <AppleIcon size={16} />
          <span>Apple</span>
        </button>
      </div>

      {/* Switch to Login */}
      <p className="auth-bottom-switch">
        Already registered?
        <button
          type="button"
          onClick={onSwitchToLogin}
          className="auth-bottom-link"
        >
          Sign In to Account →
        </button>
      </p>
    </div>
  );
}

export default RegisterForm;
