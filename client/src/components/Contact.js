import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

// Renders Contact form
function Form() {

  // set state props
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Update state based on form input
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // Validate email and alert user on submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or name is invalid');
      return;
    }

    alert(`Hello ${name}`);

    // Reset States
    setName('');
    setMessage('');
    setEmail('');
  };

  // Contact Form
  return (
    <div class='container'>
      <div class='card justify-center'>
        <p class='card-header'>Under Construction </p>
        <form className="form card-body">
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
          />
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="name"
          />
          <input
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            placeholder="message"
          />
          <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p className="ml-5 error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
