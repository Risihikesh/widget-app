import { Link, useLocation } from "react-router";

export default function Navbar() {
    const location = useLocation(); 
  
    return (
      <nav className="text-center mt-3">
        <Link
          to="/"
          style={{
            margin: "0 10px",
            fontWeight: location.pathname === "/" ? "normal" : "normal",
            color: location.pathname === "/" ? "blue" : "black",
          }}
        >
          Home
        </Link>
        |
        <Link
          to="/transaction"
          style={{
            margin: "0 10px",
            fontWeight: location.pathname === "/transaction" ? "normal" : "normal",
            color: location.pathname === "/transaction" ? "blue" : "black",
          }}
        >
          Transaction
        </Link>
        |
        <Link
          to="/profile"
          style={{
            margin: "0 10px",
            fontWeight: location.pathname === "/profile" ? "normal" : "normal",
            color: location.pathname === "/profile" ? "blue" : "black",
          }}
        >
          Profile
        </Link>
      </nav>
    );
  }