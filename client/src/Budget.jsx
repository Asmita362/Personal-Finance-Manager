import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SetMonthlyBudget = () => {
  // State to hold the total budget and the budget for each category
  const [totalBudget, setTotalBudget] = useState(0);
  const [categories, setCategories] = useState([
    { name: 'Food', budgetAmount: 0 },
    { name: 'Entertainment', budgetAmount: 0 },
    { name: 'Rent', budgetAmount: 0 },
    { name: 'Utilities', budgetAmount: 0 },
  ]);

  const [error, setError] = useState('');
  
  // Handle changes in the total budget input
  const handleTotalBudgetChange = (e) => {
    setTotalBudget(parseFloat(e.target.value));
  };

  // Handle changes in individual category budgets
  const handleCategoryBudgetChange = (e, index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].budgetAmount = parseFloat(e.target.value);
    setCategories(updatedCategories);
  };

  // Calculate the total of all category budgets
  const getCategoryTotal = () => {
    return categories.reduce((acc, category) => acc + category.budgetAmount, 0);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const categoryTotal = getCategoryTotal();
    // If the sum of the category budgets does not match the total budget
    if (categoryTotal !== totalBudget) {
      setError('The sum of the category budgets must match the total monthly budget.');
    } else {
      setError('');
      alert('Monthly Budget set successfully!');
      // Here, you would typically save this data to a server or localStorage
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-lg" style={{ width: '24rem' }}>
        <h2 className="text-center mb-4">Set Your Monthly Budget</h2>

        {/* Display any error message */}
        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Total Budget Input */}
          <div className="mb-3">
            <label htmlFor="totalBudget" className="form-label">Total Monthly Budget</label>
            <input
              type="number"
              id="totalBudget"
              className="form-control"
              value={totalBudget}
              onChange={handleTotalBudgetChange}
              placeholder="Enter your total monthly budget"
              required
            />
          </div>

          {/* Category Budget Inputs */}
          {categories.map((category, index) => (
            <div key={category.name} className="mb-3">
              <label className="form-label">{category.name}</label>
              <input
                type="number"
                className="form-control"
                value={category.budgetAmount}
                onChange={(e) => handleCategoryBudgetChange(e, index)}
                placeholder={`Budget for ${category.name}`}
                required
              />
            </div>
          ))}

          {/* Submit Button */}
          <div className="mb-3">
            <button type="submit" className="btn btn-primary w-100">
              Save Budget
            </button>
          </div>
        </form>

        {/* Display the total of category budgets and remaining budget */}
        <div className="text-center">
          <h4>Total Category Budgets: ${getCategoryTotal().toFixed(2)}</h4>
          <h4>Remaining Budget: ${(totalBudget - getCategoryTotal()).toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default SetMonthlyBudget;
