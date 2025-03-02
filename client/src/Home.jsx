import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaPlus, FaSignOutAlt } from "react-icons/fa";
import AddExpenseModal from "./AddExpenseModal";
import { useNavigate } from 'react-router-dom';
import incomeImg from "/src/assets/income.png";
import expenseImg from "/src/assets/expense.png";
import totalImg from "/src/assets/total.webp";

const HomePage = () => {
  const navigate = useNavigate();  

  const handleLogout = () => {
    console.log("User logged out");
    localStorage.clear();  // Clear user data
    navigate("/login");  // Redirect to login page
  };
  
  const handleSignIn = () => {
    console.log("User SignedIn");
    localStorage.clear();  // Clear user data
    navigate("/register");
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="container">
      {/* Header */}
      <header className="bg-primary text-white text-center p-4 d-flex justify-content-between align-items-center">
        <h1 className="m-0">Personal Finance Manager</h1>
        <div className="auth-buttons">
  <button className="btn btn-danger" onClick={handleLogout}>
    <FaSignOutAlt className="me-2" /> Logout
  </button>
  <button className="btn btn-danger" onClick={handleSignIn}>
    <FaSignOutAlt className="me-2" /> Sign In
  </button>
</div>

      </header>

      {/* Navigation */}
      <nav className="nav justify-content-center bg-light py-2">
        <a className="nav-link text-dark" href="/home">Dashboard</a>
        <a className="nav-link text-dark" href="/transaction">Transaction</a>
        <a className="nav-link text-dark" href="/report">Report</a>
        <a className="nav-link text-dark" href="/budget">Budget</a>
        <a className="nav-link text-dark" href="/goals">Goals</a>
      </nav>

      {/* Main Content */}
      <main className="mt-4">
        <section className="text-center bg-light p-5 rounded">
          <h2>Take Control of Your Finances</h2>
          <p>Track your income, expenses, and investments for better financial decisions.</p>
          <div className="d-flex justify-content-center mb-4">
            <button className="btn btn-success" onClick={() => setShowModal(true)}>
              <FaPlus /> Add New Transaction
            </button>
          </div>
          <AddExpenseModal show={showModal} handleClose={() => setShowModal(false)} />
        </section>

        {/* Financial Overview Cards */}
        <section>
          <div className="d-flex justify-content-center gap-4 flex-wrap mb-4">
            <div className="card text-center p-3 shadow" style={{ width: "20rem", height: "25rem", minWidth: "250px" }}>
              <img src={totalImg} alt="Total Balance" className="card-img-top" style={{ height: "300px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="fw-bold">Total Balance</h5>
                <h3>$5,000</h3>
              </div>
            </div>

            <div className="card text-center p-3 shadow" style={{ width: "20rem", height: "25rem", minWidth: "250px" }}>
              <img src={incomeImg} alt="Total Income" className="card-img-top" style={{ height: "300px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="fw-bold">Total Income</h5>
                <h3>${localStorage.getItem("totalIncome") || "0"}</h3>
              </div>
            </div>

            <div className="card text-center p-3 shadow" style={{ width: "20rem", height: "25rem", minWidth: "250px" }}>
              <img src={expenseImg} alt="Total Expenses" className="card-img-top" style={{ height: "300px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="fw-bold">Total Expenses</h5>
                <h3>$3,000</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mt-5">
          <h2 className="text-center">Key Features</h2>
          <div className="row mt-3">
            <div className="col-md-3">
              <div className="card text-center p-3">
                <h3>Expense Tracking</h3>
                <p>Categorize and track your expenses easily.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <h3>Budgeting</h3>
                <p>Create budgets and monitor your spending.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <h3>Financial Reports</h3>
                <p>Generate insightful reports to understand your financial health.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card text-center p-3">
                <h3>Goal Setting</h3>
                <p>Set financial goals and track your progress.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-5 text-center">
          <h2>What Our Users Say</h2>
          <blockquote className="blockquote">
            <p>"This app has helped me save so much money!" - User 1</p>
          </blockquote>
          <blockquote className="blockquote">
            <p>"I finally understand where my money is going." - User 2</p>
          </blockquote>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>&copy; {new Date().getFullYear()} Personal Finance Manager</p>
      </footer>
    </div>
  );
};

export default HomePage;
