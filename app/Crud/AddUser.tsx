import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddUser = () => {
  const router = useRouter();
  const [User, setUser] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(User);
    alert("User Added");

    await axios.post("http://localhost:5000/Customer", User);
    router.push("/Crud");
  };

  return (
    <div>
      <div className="container mx-auto flex justify-center items-center gap-4">
        <input
          className="input"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setUser({ ...User, name: e.target.value })}
        />
        <input
          className="input"
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setUser({ ...User, email: e.target.value })}
        />
        <input
          className="input"
          type="number"
          placeholder="Age"
          name="age"
          onChange={(e) => setUser({ ...User, age: e.target.value })}
        />
        <div onClick={handleAddUser} className="btn-green w-fit">
          Add user
        </div>
      </div>
    </div>
  );
};

export default AddUser;
