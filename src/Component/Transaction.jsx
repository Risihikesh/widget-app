import { useEffect, useState } from "react";
import "./Transaction.css"

const Loading = () => <div className="loading">Loading...</div>;

export default function Transaction() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return loading ? <Loading /> : <div className="transaction-container">Transaction Page</div>;
}
