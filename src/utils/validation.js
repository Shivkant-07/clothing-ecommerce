/**
 * Client-side validation utilities for Authentication
 */

export const validateEmail = (email) => {
  if (!email || !email.trim()) {
    return { isValid: false, message: 'Email address is required' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    return { isValid: false, message: 'Please enter a valid email address (e.g. name@domain.com)' };
  }
  return { isValid: true, message: '' };
};

export const validateFullName = (name) => {
  if (!name || !name.trim()) {
    return { isValid: false, message: 'Full name is required' };
  }
  if (name.trim().length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters long' };
  }
  return { isValid: true, message: '' };
};

export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, message: 'Password is required' };
  }
  if (password.length < 8) {
    return { isValid: false, message: 'Password must be at least 8 characters' };
  }
  return { isValid: true, message: '' };
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return { isValid: false, message: 'Please confirm your password' };
  }
  if (password !== confirmPassword) {
    return { isValid: false, message: 'Passwords do not match' };
  }
  return { isValid: true, message: '' };
};

export const getPasswordStrength = (password) => {
  if (!password) {
    return {
      score: 0,
      label: 'Too weak',
      criteria: {
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false,
      }
    };
  }

  const criteria = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const satisfiedCount = Object.values(criteria).filter(Boolean).length;

  let score = 0;
  let label = 'Too weak';

  if (satisfiedCount <= 1) {
    score = 1;
    label = 'Weak';
  } else if (satisfiedCount === 2 || satisfiedCount === 3) {
    score = 2;
    label = 'Fair';
  } else if (satisfiedCount === 4) {
    score = 3;
    label = 'Good';
  } else if (satisfiedCount === 5) {
    score = 4;
    label = 'Strong';
  }

  return {
    score,
    label,
    criteria
  };
};
