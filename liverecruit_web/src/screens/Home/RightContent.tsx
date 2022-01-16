import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Modal from "../../components/Modal";
import { addUser } from "../../services/UserService";

const RightContent = () => {
  const users = [1, 2, 3, 4, 5];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAddUser = () => {
    addUser(email);
  };

  return (
    <div className="p-12 w-full">
      <h1 className="text-3xl">User Management</h1>
      <br />
      <button
        className="flex items-center p-3 bg-pink-600 text-white rounded-xl"
        onClick={handleOpenModal}
      >
        Add User
        <PlusIcon className="h-auto w-6 pl-1 " />
      </button>
      <br />
      <br />

      <table className="table-auto w-full ">
        <thead>
          <tr className="text-left">
            <th>Name</th>
            <th>Email</th>
            <th>User</th>
            <th>type</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
            <td>Malcolm Lockyer</td>
            <td>1961</td>
            <td>1961</td>
            <td>1961</td>
          </tr>
        </tbody>
      </table>

      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          setEmail={setEmail}
          handleAddUser={handleAddUser}
        />
      )}
    </div>
  );
};

export default RightContent;
