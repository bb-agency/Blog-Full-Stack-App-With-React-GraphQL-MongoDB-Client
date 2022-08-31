import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  const [users, setUser] = useState([]);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Password</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr>
                <th scope="row">{user._id}</th>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>
                  <Link class="btn btn-outline-primary mr-2" to={`/users/edit/${user._id}`}>
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    // onClick={() => removeUser(user._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
