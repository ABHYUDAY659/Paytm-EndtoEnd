import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch users:", error);
      });
  }, [filter]);

  return (
    <>
      <div className="font-bold mt-6 text-lg">Users</div>
      <div className="my-2">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-2 py-1 border rounded border-slate-200"
        />
      </div>
      <div className="space-y-4">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </>
  );
};

function User({ user }) {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center border p-2 rounded-lg shadow-sm">
      <div className="flex items-center">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex items-center justify-center text-xl font-semibold mr-3">
          {user.firstName?.[0] || "?"}
        </div>
        <div>
          {user.firstName} {user.lastName}
        </div>
      </div>
      <Button onClick={(e) =>{
        navigate("/send?id=" + user._id + "&name=" + user.firstName);
      }}label={"Send Money"} />
    </div>
  );
}
