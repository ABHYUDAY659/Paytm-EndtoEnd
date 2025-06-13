import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const name = searchParams.get("name");

  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    axios.post(
      "http://localhost:3000/api/v1/user/account/transfer",
      {
        to: id, // userId of the receiver
        amount: Number(amount)
      },
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    )
    .then(() => {
      alert("Transfer successful!");
    })
    .catch((err) => {
      console.error(err);
      alert("Transfer failed. " + (err.response?.data?.message || ""));
    });
  };

  return (
    <div className="flex justify-center h-screen bg-gray-100">
      <div className="h-full flex flex-col justify-center">
        <div className="border max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Send Money</h2>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-2xl text-white">
                  {name ? name[0].toUpperCase() : "?"}
                </span>
              </div>
              <h3 className="text-2xl font-semibold">{name}</h3>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="amount">
                Amount (in Rs)
              </label>
              <input
                type="number"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="w-full h-10 rounded-md border px-3 py-2 text-sm"
              />
            </div>

            <button
              onClick={handleTransfer}
              className="w-full bg-green-500 text-white rounded-md h-10 px-4 py-2 text-sm font-medium"
            >
              Initiate Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
