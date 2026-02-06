import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "https://YOUR-BACKEND.onrender.com/api/user",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setUser(res.data);
    };
    fetchUser();
  }, []);
  return (
    <div>
      <div>
        <h2>Dashboard</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u) => (
              <tr key={u._id}>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{new Date(u.createdAt).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
