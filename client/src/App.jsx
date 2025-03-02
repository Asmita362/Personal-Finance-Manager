import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Register"; 
import Login from "./Login";
import Home from "./Home";
import Goals from "./Goals";
import Budget from "./Budget"
import Reports from "./Reports";
// import Dashboard from "./Home";
import HomePage from "./Home";
import Transaction from "./Transaction";
function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/register" element={<Register />} />  
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/report" element={<Reports />} />
        <Route path="/transaction" element={<Transaction />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
