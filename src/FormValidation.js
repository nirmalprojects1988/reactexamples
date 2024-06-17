import React, { useState } from 'react';
import '../src/FormValidation.css'


function FormValidate() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePasswordlength=(password)=>{
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  }

  const showSuccess = () => {
    setSuccessMessage('Form submitted successfully!');
    setName(''); // Clear the name field
    setEmail(''); // Clear the email field
    setPassword(''); // Clear the password field
    setTimeout(() => {
      setSuccessMessage(''); // Clear success message after 3 seconds
    }, 3000);
  };

  const validate = () => {
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      setErrorMessage('All fields are required.');
      setShowError(true); // Show the error message
      setTimeout(() => {
        setShowError(false); // Hide the error message after 3 seconds
        setErrorMessage(''); // Clear the error message
      }, 3000);
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      setShowError(true); // Show the error message
      setTimeout(() => {
        setShowError(false); // Hide the error message after 3 seconds
        setErrorMessage(''); // Clear the error message
      }, 3000);
      return;
    }
    if(!validatePasswordlength(password)){
        setErrorMessage('Password must be at least 8 characters long and contain at least one numeric digit');
        setShowError(true);
        setTimeout(()=>{
            setShowError(false);
            setErrorMessage('');
        },3000);
        return;
    }

    showSuccess();
  };

  return (
    <div className="form-container">
      <h1>Simple Form Validation</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        <button onClick={validate}>Validate</button>
        {showError && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
}

export default FormValidate;
