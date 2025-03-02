import { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Goals = () => {
  const [goalData, setGoalData] = useState({
    name: '',
    targetAmount: '',
    timeframe: '',
    priority: 'Medium',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setGoalData({
      ...goalData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Mock request to save the goal to the backend (adjust URL to match your API endpoint)
      const response = await axios.post('http://localhost:5173/api/goals', goalData);

      // On successful creation, show success message
      setSuccessMessage('Goal created successfully!');
      setGoalData({
        name: '',
        targetAmount: '',
        timeframe: '',
        priority: 'Medium',
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong while creating the goal');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '24rem' }}>
        <h2 className="text-center mb-4">Create New Goal</h2>
        
        {error && <p className="text-danger text-center">{error}</p>}
        {successMessage && <p className="text-success text-center">{successMessage}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="goalName" className="form-label">Goal Name</label>
            <input
              type="text"
              id="goalName"
              name="name"
              placeholder="e.g. Save for vacation"
              value={goalData.name}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="targetAmount" className="form-label">Target Amount</label>
            <input
              type="number"
              id="targetAmount"
              name="targetAmount"
              placeholder="Amount to save"
              value={goalData.targetAmount}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="timeframe" className="form-label">Timeframe</label>
            <input
              type="month"
              id="timeframe"
              name="timeframe"
              value={goalData.timeframe}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority</label>
            <select
              id="priority"
              name="priority"
              value={goalData.priority}
              onChange={handleChange}
              className="form-control"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary w-100">Create Goal</button>
        </form>

        <p className="text-center mt-3">
          <a href="/goals" className="text-primary text-decoration-none">View All Goals</a>
        </p>
      </div>
    </div>
  );
};

export default Goals;
