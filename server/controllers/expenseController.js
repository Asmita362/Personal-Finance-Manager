
import Expense from "../models/expenseSchema.js";

// Add Expense
export const addExpense = async (req, res) => {
  try {
      const { title, amount, category, type, date, description } = req.body;

      if (!title || !amount || !category || !type || !date) {
          return res.status(400).json({ error: "All fields are required" });
      }

      const newExpense = new Expense({
          title,
          amount: parseFloat(amount),  // Ensure amount is stored as Number
          category,
          type,
          date: new Date(date),  // Ensure date is stored as Date
          description
      });

      await newExpense.save();
      res.status(201).json({ message: "Expense Added Successfully", expense: newExpense });

  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// Get Expenses
export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        return res.status(200).json(expenses);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("Received DELETE request for ID:", id); // Debugging line

    const deletedExpense = await Expense.findByIdAndDelete(id);

    if (!deletedExpense) {
      console.log("Expense not found in DB");
      return res.status(404).json({ error: "Expense not found" });
    }

    return res.status(200).json({ message: "Expense deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};


