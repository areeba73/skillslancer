import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message || 'Error sending reset email. Please try again later.');
      } else {
        setMessage('Error sending reset email. Please try again later.');
      }
    }
  };

  return (
    <div className="forgot-password-container border">
      <h1>Forgot your password?</h1>

      <form onSubmit={handleSubmit} className="forgot-password-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Send password reset info
        </button>
      </form>

      {message && <p className="message">{message}</p>}

      <p className="reset-info">
        It may take several minutes to receive a password reset email. Make sure to check your junk mail.
      </p>

      <p className="login-link">
        Already have an account? <a href="./login">Log in</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
