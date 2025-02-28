import { useEffect, useState } from "react";
import "./Home.css"

const Loading = () => <div className="loading" >Loading...</div>;

export default function Home () {
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      setTimeout(() => setLoading(false), 5000);
    }, []);
  
    return loading ? <Loading /> : <div className="home-container">Home Page</div>;
  };
  
