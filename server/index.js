
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/Database.js";
import userRoutes from "./routes/userRoutes.js";
import expenseRoutes from "./routes/expenseRouter.js";
// import transactionRoutes from "./routes/transactionRoutes.js";

// ✅ Load Environment Variables
dotenv.config();

// ✅ Connect to MongoDB
connectDB();

// ✅ Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(express.json());
app.use(cors());

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/expenses", expenseRoutes);

// ✅ Test Route
app.get("/", (req, res) => {
  res.send("Hello, Server is Running & MongoDB is Connected!");
});

app.use((err, req, res, next) => {
  console.error("Backend Error:", err);
  res.status(500).json({ error: "Internal Server Error" });
});
// app.use("/api/transactions", transactionRoutes);
// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
