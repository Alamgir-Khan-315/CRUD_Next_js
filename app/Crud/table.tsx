"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

type CustomerType = {
  id: number;
  name: string;
  email: string;
  age: number;
};

type Props = {
  Customer?: CustomerType[];
};

const Table: React.FC<Props> = ({ Customer }) => {
  const router = useRouter();
  function Delete(id: number | string) {
    alert(`User daleted ${id}`);
    axios.delete(`http://localhost:5000/Customer/${id}`);
    router.push("/Crud");
  }

  return (
    <div>
      <table className="table w-full mt-[2rem] p-4">
        <thead>
          <tr className="tr bg-gray-400 text-white font-bold rounded-full">
            <td className="td">ID</td>
            <td className="td">Name</td>
            <td className="td">Email</td>
            <td className="td">Age</td>
            <td className="td">Action</td>
          </tr>
        </thead>
        <tbody>
          {Customer?.map((d, i) => (
            <tr key={i} className="tr">
              <td className="td">{d.id}</td>
              <td className="td">{d.name}</td>
              <td className="td">{d.email}</td>
              <td className="td">{d.age}</td>
              <td className="td">
                <div className="btn flex gap-3">
                  <div className="btn-red" onClick={() => Delete(d.id)}>
                    Delete
                  </div>
                  <Link href={"./Crud"}>
                    <div className="btn-green">Edit</div>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
