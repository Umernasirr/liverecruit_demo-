import React, { useEffect, useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";
import Modal from "../../components/Modal";
import useUserManagement from "../../hooks/useUserManagement";

const RightContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  const { inviteUser, users } = useUserManagement();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleAddUser = (isAdmin: boolean) => {
    inviteUser(email, isAdmin);
  };

  console.log(users);

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
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, idx: number) => (
            <tr key={idx.toString()}>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toDateString()}</td>
            </tr>
          ))}
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
