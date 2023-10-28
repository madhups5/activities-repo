import React, { useState } from 'react';

export function LoginForm({ onLogin }) {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate employee ID and password here
    if (employeeId === '123' && password === 'password') {
      onLogin();
    } else {
      setError('Invalid employee ID or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Employee ID:
        <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} required />
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

function LoanApplication({ loanId, loanType, customerId, customerName, customerPhone, customerPan, status, onUpdate }) {
  const [newStatus, setNewStatus] = useState(status);

  const handleUpdate = () => {
    onUpdate(loanId, newStatus);
  };
  return (
    <div>
      <div>Loan ID: {loanId}</div>
      <div>Loan Type: {loanType}</div>
      <div>Customer ID: {customerId}</div>
      <div>Customer Name: {customerName}</div>
      <div>Customer Phone: {customerPhone}</div>
      <div>Customer PAN: {customerPan}</div>
      <div>
        Status:
        <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Rejected">Rejected</option>
        </select>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
}

export function LoanService() {
  const [loanApplications, setLoanApplications] = useState([
    {
      loanId: 1,
      loanType: 'Housing Loan',
      customerId: 1,
      customerName: 'John Doe',
      customerPhone: '1234567890',
      customerPan: 'ABCDE1234F',
      status: 'Pending',
    },
    {
      loanId: 2,
      loanType: 'Educational Loan',
      customerId: 2,
      customerName: 'Jane Doe',
      customerPhone: '0987654321',
      customerPan: 'FGHIJ5678K',
      status: 'Pending',
    },
  ]);
  const [creditScores, setCreditScores] = useState({
    ABCDE1234F: 750,
    FGHIJ5678K: 650,
  });
  const [error, setError] = useState('');

  const handleUpdate = (loanId, newStatus) => {
    // Update loan application status here
    setLoanApplications(
      loanApplications.map((loanApplication) =>
        loanApplication.loanId === loanId ? { ...loanApplication, status: newStatus } : loanApplication
      )
    );
  };

  const handleViewCreditScore = (customerPan) => {
    // View credit score here
    if (creditScores[customerPan]) {
      alert(`Credit score for PAN ${customerPan}: ${creditScores[customerPan]}`);
    } else {
      setError('Credit score not found');
    }
  };

  return (
    <div>
      <h2>View Applications</h2>
      {loanApplications.map((loanApplication) => (
        <LoanApplication key={loanApplication.loanId} {...loanApplication} onUpdate={handleUpdate} />
      ))}
      <h2>Update Loan Applications</h2>
      {error && <div className="error">{error}</div>}
      <h2>View Credit Scores</h2>
      <label>
        Customer PAN:
        <input type="text" onChange={(e) => setError('')} required />
      </label>
      <button onClick={() => handleViewCreditScore('ABCDE1234F')}>View Credit Score</button>
      <button onClick={() => handleViewCreditScore('FGHIJ5678K')}>View Credit Score</button>
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
    </div>
  );
}

export default App;