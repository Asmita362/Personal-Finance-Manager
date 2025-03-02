// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:5000/api",
//   headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
// });

// // ✅ Get All Transactions
// export const getTransactions = async () => {
//   const response = await API.get("/transactions");
//   return response.data;
// };

// // ✅ Add Transaction
// export const addTransaction = async (transaction) => {
//   const response = await API.post("/transactions", transaction);
//   return response.data;
// };

// // ✅ Delete Transaction
// export const deleteTransaction = async (id) => {
//   await API.delete(`/transactions/${id}`);
// };

// // ✅ Update Transaction
// export const updateTransaction = async (id, transaction) => {
//   const response = await API.put(`/transactions/${id}`, transaction);
//   return response.data;
// };


// // ✅ Register User
// // export const registerUser = async (userData) => {
// //   try {
// //     const response = await API.post("/users/signup", userData);
// //     return response.data;
// //   } catch (error) {
// //     // console.error("Registration Error:", error.response?.data || error.message);
// //     throw error.response?.data || error.message;
// //   }
// // };
// export const registerUser = async (userData) => {
//     try {
//       const response = await API.post("/users/signup", userData);
//       return response.data;
//     } catch (error) {
//       console.error("Registration Error:", error.response?.data || error.message);
//       throw error.response?.data || { message: "Server Error. Please try again." };
//     }
//   };

// // // ✅ Login User
// // export const loginUser = async (userData) => {
// //   try {
// //     const response = await API.post("/users/login", userData);
// //     return response.data;
// //   } catch (error) {
// //     console.error("Login Error:", error.response?.data || error.message);
// //     throw error.response?.data || error.message;
// //   }
// // };
// // const API_BASE_URL = "http://localhost:5000";  // ✅ Make sure this is correct
// const API_BASE_URL = "http://127.0.0.1:5000";

// export const loginUser = async (userData) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/api/users/login`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userData),
//     });

//     return await response.json();
//   } catch (error) {
//     console.error("Login Error:", error);
//   }
// };

// // ✅ Get Current User (Protected Route)
// export const getCurrentUser = async (token) => {
//   try {
//     const response = await API.get("/users/me", {
//       headers: { Authorization: `Bearer ${token}` },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Fetch User Error:", error.response?.data || error.message);
//     throw error.response?.data || error.message;
//   }
// };

// export default API;

import axios from "axios";

// ✅ Set Base URL for Backend (Port 5000)
const API = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Register User
export const registerUser = async (userData) => {
  try {
    const response = await API.post("/users/register", userData);
    return response.data;
  } catch (error) {
    console.error("Registration Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// ✅ Login User
export const loginUser = async (userData) => {
  try {
    const response = await API.post("/users/login", userData);
    return response.data;
  } catch (error) {
    console.error("Login Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};

// ✅ Get Current User (Protected Route)
export const getCurrentUser = async (token) => {
  try {
    const response = await API.get("/users/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error("Fetch User Error:", error.response?.data || error.message);
    throw error.response?.data || error.message;
  }
};
// ✅ Add Expense
export const addExpense = async (expenseData) => {
  try {
    const response = await API.post("/expenses/add", expenseData);
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Failed to add expense" };
  }
};

// ✅ Get Expenses
export const getExpenses = async () => {
  try {
    const response = await API.get("/expenses/");
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.error || "Failed to fetch expenses" };
  }
};

export const deleteExpense = async (id) => { 
  try {
    const response = await API.delete(`/expenses/${id}`);

    return response.data;
  } catch (error) {
    console.error("Error deleting expense:", error);
    return { error: error.message };
  }
};

export default API;