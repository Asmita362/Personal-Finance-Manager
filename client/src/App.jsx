import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./Signup"; // ✅ Ensure correct import
import Login from "./Login";
import Home from "./Home";


function App() {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path="/" element={<Home />} />  
        <Route path="/signup" element={<SignupPage />} />  
        <Route path="/login" element={<Login />} />
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;