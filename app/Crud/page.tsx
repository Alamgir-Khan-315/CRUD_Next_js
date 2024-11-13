"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const page = () => {
  const [Customer, setCustomer] = useState([]);

  //   const Fetch = () => {
  //     axios.get("http://localhost:3001/customer");
  //     .then((response) => response.json())
  // .then((data) => setCustomer(data))
  //   }
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((response) => response.json())
      .then((data) => setCustomer(data));
  }, []);

  return (
    <div className="bg-gray-200 w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="container mx-auto bg-white rounded-lg p-4">
        <h1 className="title">Customer List</h1>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Name</td>
              <td>Email</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {Customer.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
