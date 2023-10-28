import React,{useState } from 'react';

export function RegistrationForm() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pan, setPan] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate form data here
    if (firstname && lastname && email && password && pan && phone) {
      // Handle form submission here
      console.log('Registration successful');
    } else {
      setError('Please fill in all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <label>
        PAN:
        <input type="text" value={pan} onChange={(e) => setPan(e.target.value)} required />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </label>
      {error && <div className="error">{error}</div>}
      <button type="submit">Register</button>
    </form>
  );
}

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate email and password here
    if (email === 'example@example.com' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      {error && <div className="error">{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export function LoanService() {
  const [loans, setLoans] = useState([]);
  const [error, setError] = useState('');

  const handleApply = (loanType) => {
    // Apply for loan here
    setLoans([...loans, { type: loanType, status: 'Pending' }]);
  };

  return (
    <div>
      <h2>View Loans</h2>
      <ul>
        <li>Housing Loan</li>
        <li>Educational Loan</li>
        <li>Gold Loan</li>
        <li>Personal Loan</li>
        <li>Car Loan</li>
        <li>Business Loan</li>
      </ul>
      <h2>Apply For Loan</h2>
      <ul>
        <li>
          Housing Loan <button onClick={() => handleApply('Housing Loan')}>Apply</button>
        </li>
        <li>
          Educational Loan <button onClick={() => handleApply('Educational Loan')}>Apply</button>
        </li>
        <li>
          Gold Loan <button onClick={() => handleApply('Gold Loan')}>Apply</button>
        </li>
        <li>
          Personal Loan <button onClick={() => handleApply('Personal Loan')}>Apply</button>
        </li>
        <li>
          Car Loan <button onClick={() => handleApply('Car Loan')}>Apply</button>
        </li>
        <li>
          Business Loan <button onClick={() => handleApply('Business Loan')}>Apply</button>
        </li>
      </ul>
      <h2>See Loan Status</h2>
      {loans.length === 0 ? (
        <div>No loans applied</div>
      ) : (
        <ul>
          {loans.map((loan, index) => (
            <li key={index}>
              {loan.type} - {loan.status}
            </li>
          ))}
        </ul>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

 export function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <LoanService />
      ) : (
        <div>
          <h1>Login Form</h1>
          <LoginForm onLogin={handleLogin} />
        </div>
      )}
      <h1>Registration Form</h1>
      <RegistrationForm />
    </div>
  );
}

export default App;