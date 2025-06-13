import { useEffect, useState } from "react";
import axios from "axios";

export const Balance = () => {
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    axios
      .get("http://localhost:3000/api/v1/user/account/balance", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(res => {
        setBalance(res.data.balance);
      })
      .catch(err => {
        console.error("Error fetching balance:", err);
      });
  }, []);

  return (
    <div className="flex">
      <div className="font-bold text-lg">Your balance</div>
      <div className="font-semibold ml-4 text-lg">
        {balance !== null ? `Rs ${balance}` : "Loading..."}
      </div>
    </div>
  );
};
