import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string()
        .required('Phone number is required')
        .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
      subject: Yup.string()
        .required('Message is required')
        .min(10, 'Message must be at least 10 characters')
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await axios.post(
          'https://script.google.com/macros/s/AKfycbwoXmAYILQfF8zA4ZA6tjQsFRcxgOTOE1LTQ36W_24OT-fkvwxZDzM3zSgdGNtywXLq/exec',
          values,
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            }
          }
        );
        toast.success('Form submitted successfully!');
        resetForm();
      } catch (error) {
        toast.error('Error submitting form');
        console.error('Error:', error);
      }
    }
  });

  return (
    <>
    <form 
      onSubmit={formik.handleSubmit} 
      className="contact-form"
      style={{
        width: '100%',
        maxWidth: '600px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        backgroundColor: 'white',
        margin: '0 auto',
        display:'block'
      }}
    >
      <div className="text-center mb-4">
        <h2 style={{
          fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
          fontWeight: '600',
          color: '#2c3e50',
          marginBottom: '0.5rem'
        }}>
          Contact Us
        </h2>
        <p style={{ 
          color: '#7f8c8d',
          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)'
        }}>
          We'll respond within 24 hours
        </p>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="name" style={{
          fontWeight: '500',
          color: '#34495e',
          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
          marginBottom: '0.5rem',
          display: 'block'
        }}>
          Your Name *
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              borderRadius: '8px',
              border: `1px solid ${formik.touched.name && formik.errors.name ? '#e74c3c' : '#dfe6e9'}`,
              height: 'clamp(42px, 5vw, 48px)',
              fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
              transition: 'all 0.3s'
            }}
            placeholder="Full name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          <i className="bi bi-person-fill" style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#b2bec3',
            fontSize: '1rem'
          }}></i>
        </div>
        {formik.touched.name && formik.errors.name && (
          <div style={{
            color: '#e74c3c',
            fontSize: '0.8rem',
            marginTop: '4px'
          }}>
            {formik.errors.name}
          </div>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="email" style={{
          fontWeight: '500',
          color: '#34495e',
          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
          marginBottom: '0.5rem',
          display: 'block'
        }}>
          Email Address *
        </label>
        <div style={{ position: 'relative' }}>
          <input
            id="email"
            name="email"
            type="email"
            className="form-control"
            style={{
              width: '100%',
              padding: '12px 12px 12px 40px',
              borderRadius: '8px',
              border: `1px solid ${formik.touched.email && formik.errors.email ? '#e74c3c' : '#dfe6e9'}`,
              height: 'clamp(42px, 5vw, 48px)',
              fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
              transition: 'all 0.3s'
            }}
            placeholder="your.email@example.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <i className="bi bi-envelope-fill" style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#b2bec3',
            fontSize: '1rem'
          }}></i>
        </div>
        {formik.touched.email && formik.errors.email && (
          <div style={{
            color: '#e74c3c',
            fontSize: '0.8rem',
            marginTop: '4px'
          }}>
            {formik.errors.email}
          </div>
        )}
      </div>

      <div className="form-group mb-3">
        <label htmlFor="phone" style={{
          fontWeight: '500',
          color: '#34495e',
          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
          marginBottom: '0.5rem',
          display: 'block'
        }}>
          Phone Number *
        </label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: 'clamp(60px, 8vw, 80px)',
            height: 'clamp(42px, 5vw, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#f8f9fa',
            border: `1px solid ${formik.touched.phone && formik.errors.phone ? '#e74c3c' : '#dfe6e9'}`,
            borderRight: 'none',
            borderRadius: '8px 0 0 8px'
          }}>
            <span style={{ color: '#7f8c8d' }}>+1</span>
          </div>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="form-control"
            style={{
              borderRadius: '0 8px 8px 0',
              border: `1px solid ${formik.touched.phone && formik.errors.phone ? '#e74c3c' : '#dfe6e9'}`,
              borderLeft: 'none',
              height: 'clamp(42px, 5vw, 48px)',
              fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
              padding: '12px',
              flex: 1
            }}
            placeholder="(555) 123-4567"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            maxLength={10}
          />
        </div>
        {formik.touched.phone && formik.errors.phone && (
          <div style={{
            color: '#e74c3c',
            fontSize: '0.8rem',
            marginTop: '4px'
          }}>
            {formik.errors.phone}
          </div>
        )}
      </div>

      <div className="form-group mb-4">
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
          <label htmlFor="subject" style={{
            fontWeight: '500',
            color: '#34495e',
            fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
            display: 'block'
          }}>
            Your Message *
          </label>
          <span style={{
            fontSize: '0.8rem',
            color: formik.values.subject?.length > 250 ? '#e74c3c' : '#7f8c8d'
          }}>
            {formik.values.subject?.length || 0}/300
          </span>
        </div>
        <textarea
          id="subject"
          name="subject"
          className="form-control"
          style={{
            width: '100%',
            borderRadius: '8px',
            border: `1px solid ${formik.touched.subject && formik.errors.subject ? '#e74c3c' : '#dfe6e9'}`,
            minHeight: '120px',
            padding: '12px',
            fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
            resize: 'vertical'
          }}
          placeholder="Tell us about your requirements..."
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.subject}
          maxLength={300}
        ></textarea>
        {formik.touched.subject && formik.errors.subject && (
          <div style={{
            color: '#e74c3c',
            fontSize: '0.8rem',
            marginTop: '4px'
          }}>
            {formik.errors.subject}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="btn w-100"
        style={{
          background: '#E0A63B',
          color: 'white',
          fontWeight: '600',
          border: 'none',
          borderRadius: '8px',
          height: 'clamp(42px, 5vw, 48px)',
          fontSize: 'clamp(0.9rem, 1.1vw, 1rem)',
          transition: 'all 0.3s',
          marginTop: '1rem'
        }}
        disabled={formik.isSubmitting}
      >
        {formik.isSubmitting ? (
          <div className="spinner-border spinner-border-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          'Submit Message'
        )}
      </button>

      <div className="text-center mt-3" style={{
        fontSize: '0.8rem',
        color: '#7f8c8d'
      }}>
        <p>We respect your privacy. Your information will not be shared.</p>
      </div>
    </form>
    </>
  );
};

export default ContactForm;