import { useEffect, useState } from "react";
import "./Profile.css";

const Loading = () => <div className="loading">Loading...</div>;

export default function Profile ()  {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 5000);
    }, []);
  
    return loading ? <Loading /> : <div className="profile-container">profile Page</div>;
  };
  

