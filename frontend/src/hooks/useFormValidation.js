import { useState, useCallback } from 'react';

const useFormValidation = (initialValues = {}, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Validate a single field
  const validateField = useCallback((name, value) => {
    if (!validationSchema[name]) return '';

    const fieldValidation = validationSchema[name];
    
    // Required validation
    if (fieldValidation.required && (!value || value.trim() === '')) {
      return fieldValidation.required;
    }

    // Email validation
    if (fieldValidation.email && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return fieldValidation.email;
      }
    }

    // Min length validation
    if (fieldValidation.minLength && value && value.length < fieldValidation.minLength.value) {
      return fieldValidation.minLength.message;
    }

    // Max length validation
    if (fieldValidation.maxLength && value && value.length > fieldValidation.maxLength.value) {
      return fieldValidation.maxLength.message;
    }

    // Pattern validation
    if (fieldValidation.pattern && value) {
      if (!fieldValidation.pattern.value.test(value)) {
        return fieldValidation.pattern.message;
      }
    }

    // Custom validation
    if (fieldValidation.validate && value) {
      const customError = fieldValidation.validate(value, values);
      if (customError) {
        return customError;
      }
    }

    return '';
  }, [validationSchema, values]);

  // Validate all fields
  const validateForm = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationSchema).forEach(fieldName => {
      const error = validateField(fieldName, values[fieldName] || '');
      if (error) {
        newErrors[fieldName] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  }, [validationSchema, values, validateField]);

  // Handle input change
  const handleChange = useCallback((name, value) => {
    setValues(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  // Handle input blur
  const handleBlur = useCallback((name) => {
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, values[name] || '');
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField, values]);

  // Handle form submission
  const handleSubmit = useCallback(async (onSubmit) => {
    setIsSubmitting(true);
    
    if (validateForm()) {
      try {
        await onSubmit(values);
      } catch (error) {
        console.error('Form submission error:', error);
      }
    }
    
    setIsSubmitting(false);
  }, [validateForm, values]);

  // Reset form
  const resetForm = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  // Set form values
  const setFormValues = useCallback((newValues) => {
    setValues(newValues);
  }, []);

  // Set field error
  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({ ...prev, [name]: error }));
  }, []);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFormValues,
    setFieldError,
    validateForm,
    validateField
  };
};

export default useFormValidation;
