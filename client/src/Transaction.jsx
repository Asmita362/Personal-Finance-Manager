
import React, { useState, useEffect } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getExpenses, deleteExpense } from "../src/services/api"; // Fixed import path

const Transactions = () => {
  const navigate = useNavigate();
  const [transactionType, setTransactionType] = useState("Income");
  const [filter, setFilter] = useState("all");
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [transactionType, filter]);

  const fetchTransactions = async () => {
    try {
      const data = await getExpenses();
      console.log("Fetched Transactions:", data); // Debugging output
      if (data && !data.error) {
        setTransactions(data);
      } else {
        console.error("Error fetching transactions:", data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  // const applyFilters = () => {
  //   let filteredData = [...transactions];

  //   if (transactionType !== "all") {
  //     filteredData = filteredData.filter(
  //       (t) => t.type.toLowerCase() === transactionType.toLowerCase()
  //     );
  //   }

  //   setTransactions(filteredData); // Update state with filtered data
  // };
  const applyFilters = () => {
    let filteredData = transactions;
  
    if (transactionType !== "all") {
      filteredData = filteredData.filter(
        (t) => t.type.toLowerCase() === transactionType.toLowerCase()
      );
    }
  
    return filteredData; // Return filtered data instead of updating state
  };
  

  const handleDelete = async (id) => {
    console.log(`Deleting expense ID: ${id}`);
    const response = await deleteExpense(id);
    if (!response.error) {
      setTransactions(transactions.filter((t) => t._id !== id));
    } else {
      console.error("Failed to delete transaction:", response.error);
    }
  };

  const handleEdit = (id) => {
    alert(`Edit transaction with ID: ${id}`);
  };

  const filterTransactions = (transactions = []) => {
    const now = new Date();
    return transactions.filter((t) => {
      const transactionDate = new Date(t.date);
      if (filter === "lastWeek") {
        const lastWeek = new Date();
        lastWeek.setDate(now.getDate() - 7);
        return transactionDate >= lastWeek;
      } else if (filter === "lastMonth") {
        const lastMonth = new Date();
        lastMonth.setMonth(now.getMonth() - 1);
        return transactionDate >= lastMonth;
      }
      return true;
    });
  };

  return (
    <Container>
      <h3 className="text-center my-4 fw-bold" style={{ color: "#6f42c1" }}>
        "View and manage all your Transactions easily!"
      </h3>

      <div className="d-flex justify-content-center mb-4 mt-4">
        <Button
          variant={transactionType === "Income" ? "success" : "outline-success"}
          className="me-2 fw-bold"
          onClick={() => setTransactionType("Income")}
        >
          Show Income
        </Button>
        <Button
          variant={transactionType === "Expense" ? "primary" : "outline-primary"}
          className="me-2 fw-bold"
          onClick={() => setTransactionType("Expense")}
        >
          Show Expenses
        </Button>

        <select
          className="form-select w-auto outline-secondary fw-bold"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">Transactions</option>
          <option value="lastWeek">Last Week</option>
          <option value="lastMonth">Last Month</option>
        </select>
      </div>

      <Table>
        <thead className="table-dark">
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            <th>Date</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {applyFilters().map((t) => (

<tr key={t._id}> 

                <td>{t.title}</td>
                <td>${t.amount}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>
                <td>{new Date(t.date).toLocaleDateString()}</td>
                <td>{t.description}</td>
                <td>
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(t._id)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(t._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Transactions;
