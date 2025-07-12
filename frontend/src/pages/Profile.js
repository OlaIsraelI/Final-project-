import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import useFormValidation from '../hooks/useFormValidation';
import FormGroup from '../components/common/FormGroup';
import FormInput from '../components/common/FormInput';
import Spinner from '../components/common/Spinner';
import ErrorOutput from '../components/common/ErrorOutput';
import SuccessOutput from '../components/common/SuccessOutput';

const Profile = () => {
  const { user, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const validationSchema = {
    firstName: {
      required: 'First name is required',
      minLength: { value: 2, message: 'First name must be at least 2 characters' },
      maxLength: { value: 50, message: 'First name cannot exceed 50 characters' }
    },
    lastName: {
      required: 'Last name is required',
      minLength: { value: 2, message: 'Last name must be at least 2 characters' },
      maxLength: { value: 50, message: 'Last name cannot exceed 50 characters' }
    },
    email: {
      required: 'Email is required',
      email: 'Please enter a valid email address'
    },
    bio: {
      maxLength: { value: 500, message: 'Bio cannot exceed 500 characters' }
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFormValues
  } = useFormValidation(
    {
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      email: user?.email || '',
      bio: user?.bio || ''
    },
    validationSchema
  );

  useEffect(() => {
    if (user) {
      setFormValues({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        bio: user.bio || ''
      });
    }
  }, [user, setFormValues]);

  const onSubmit = async (formData) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // In a real app, you would call your API here
      // await updateUser(formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile. Please try again.');
      console.error('Profile update error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !isSubmitting) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Profile Settings</h1>
            <p className="mt-1 text-sm text-gray-600">
              Update your personal information and preferences.
            </p>
          </div>

          <div className="p-6">
            {error && <ErrorOutput message={error} />}
            {success && <SuccessOutput message={success} />}

            <form onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(onSubmit);
            }}>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormGroup
                    label="First Name"
                    error={touched.firstName && errors.firstName}
                  >
                    <FormInput
                      type="text"
                      name="firstName"
                      value={values.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      onBlur={() => handleBlur('firstName')}
                      placeholder="Enter your first name"
                      error={touched.firstName && errors.firstName}
                    />
                  </FormGroup>

                  <FormGroup
                    label="Last Name"
                    error={touched.lastName && errors.lastName}
                  >
                    <FormInput
                      type="text"
                      name="lastName"
                      value={values.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      onBlur={() => handleBlur('lastName')}
                      placeholder="Enter your last name"
                      error={touched.lastName && errors.lastName}
                    />
                  </FormGroup>
                </div>

                <FormGroup
                  label="Email Address"
                  error={touched.email && errors.email}
                >
                  <FormInput
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onBlur={() => handleBlur('email')}
                    placeholder="Enter your email address"
                    error={touched.email && errors.email}
                  />
                </FormGroup>

                <FormGroup
                  label="Bio"
                  error={touched.bio && errors.bio}
                >
                  <textarea
                    name="bio"
                    rows={4}
                    value={values.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    onBlur={() => handleBlur('bio')}
                    placeholder="Tell us a bit about yourself..."
                    className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      touched.bio && errors.bio
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300'
                    }`}
                  />
                  {touched.bio && errors.bio && (
                    <p className="mt-1 text-sm text-red-600">{errors.bio}</p>
                  )}
                </FormGroup>

                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 