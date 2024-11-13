"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./table";
import AddUser from "./AddUser";

const Page = () => {
  const [Customer, setCustomer] = useState([]);
  const [Add, setAdd] = useState(false);
  function handleAdd() {
    setAdd(!Add);
  }

  const Fetch = async () => {
    const response = await axios.get("http://localhost:5000/Customer");
    setCustomer(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    Fetch();
  }, []);

  return (
    <div className="bg-gray-200 w-full h-full flex">
      <div className="container mx-auto my-[2rem] bg-white rounded-lg ">
        <h1 className="title m-[2rem]">Customer List</h1>
        <div onClick={handleAdd} className="btn-green w-fit m-[2rem]">
          Add user
        </div>

        {Add === true && <AddUser />}

        <Table Customer={Customer} />
      </div>
    </div>
  );
};

export default Page;
