import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./Component/Home";
import Transaction from "./Component/Transaction";
import Profile from "./Component/Profile";
import Navbar from "./Component/Navbar";



function App() {
  return (
    
      <div className="text-center mt-3">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
  
  );
}

export default App;
