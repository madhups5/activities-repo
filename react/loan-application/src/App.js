
import React from 'react';
import  RegistrationForm  from './components/Customer';
import  LoanService  from './components/Customer';
import './index.css';
function App() {
  const handleRegistration = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <RegistrationForm onSubmit={handleRegistration} />
    </div>
  );
}

export default App;