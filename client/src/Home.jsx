import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaPlus} from "react-icons/fa";
import AddExpenseModal from "./AddExpenseModal";


const HomePage = () => {

  const [showModal, setShowModal] = useState(false);  
  
  return (
  
    <div className="container">
      <header className="bg-primary text-white text-center p-4">
        <h1>Personal Finance Manager</h1>
        <nav className="nav justify-content-center">
          <a className="nav-link text-white" href="/dashboard">Dashboard</a>
          <a className="nav-link text-white" href="/transactions">Transactions</a>
          <a className="nav-link text-white" href="/reports">Reports</a>
          <a className="nav-link text-white" href="/budget">Budget</a>
          <a className="nav-link text-white" href="/goals">Goals</a>
        </nav>
      </header>
    
      <main className="mt-4">
        <section className="text-center bg-light p-5 rounded">
          <h2>Take Control of Your Finances</h2>
          <p>
            Our Personal Finance Manager helps you track your income, expenses, and
            investments, so you can make informed decisions about your money.
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
          <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          <FaPlus /> Add New Transaction
        </button>
      </div>
      <AddExpenseModal show={showModal} handleClose={() => setShowModal(false)} />


        </section>

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

      <footer className="bg-dark text-white text-center p-3 mt-5">
        <p>&copy; {new Date().getFullYear()} Personal Finance Manager</p>
      </footer>
    </div>
  );
};

export default HomePage;

