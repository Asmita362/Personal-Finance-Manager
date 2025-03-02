// import Transaction from "../models/Transaction.js";

// // ✅ Create a Transaction
// export const addTransaction = async (req, res) => {
//   try {
//     const { title, amount, category, type, date, description } = req.body;

//     if (!title || !amount || !category || !type || !date) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const newTransaction = new Transaction({
//       title,
//       amount,
//       category,
//       type,
//       date,
//       description,
//       userId: req.user.id, // Assuming user is authenticated
//     });

//     await newTransaction.save();
//     res.status(201).json({ message: "Transaction added successfully", transaction: newTransaction });
//   } catch (error) {
//     console.error("Add Transaction Error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // ✅ Get all transactions for a user
// export const getTransactions = async (req, res) => {
//   try {
//     const transactions = await Transaction.find({ userId: req.user.id }).sort({ date: -1 });
//     res.status(200).json(transactions);
//   } catch (error) {
//     console.error("Get Transactions Error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // ✅ Delete a transaction
// export const deleteTransaction = async (req, res) => {
//   try {
//     const transaction = await Transaction.findById(req.params.id);

//     if (!transaction) {
//       return res.status(404).json({ message: "Transaction not found" });
//     }

//     if (transaction.userId.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Unauthorized" });
//     }

//     await Transaction.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Transaction deleted successfully" });
//   } catch (error) {
//     console.error("Delete Transaction Error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };

// // ✅ Update a transaction
// export const updateTransaction = async (req, res) => {
//   try {
//     const transaction = await Transaction.findById(req.params.id);

//     if (!transaction) {
//       return res.status(404).json({ message: "Transaction not found" });
//     }

//     if (transaction.userId.toString() !== req.user.id) {
//       return res.status(403).json({ message: "Unauthorized" });
//     }

//     const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });

//     res.status(200).json({ message: "Transaction updated successfully", transaction: updatedTransaction });
//   } catch (error) {
//     console.error("Update Transaction Error:", error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };
