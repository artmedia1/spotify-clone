'use client'
// LoginForm.jsx
import React from 'react';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter(); 
  // Handler for the form submission
  const handleSubmit = async (event:any) => {
    event.preventDefault(); // Prevent the default form submission action
  
    console.log('Form submitted'); // Debugging: Check if the function is called
  
    const formData = new FormData(event.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
  
    console.log('FormData:', data); // Should log the form data
  
    try {
      const response = await fetch('/api/test4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log('Response:', result); 
      if (response.ok) {
        // Use the router to navigate to the profile page on successful login
        router.push('/profile');
      } else {
        alert('Login failed'); // Or handle the error in a more user-friendly way
      }
      
      
    } catch (error) {
      console.error('Error:', error);
      alert('Login failed');
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">email:</label>
          <input id="email" name="email" type="text" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input id="password" name="password" type="password" required />
        </div>
        <div>
          <button className="btn btn-active btn-neutral" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
