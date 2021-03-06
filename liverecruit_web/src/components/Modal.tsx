import React, { useState } from "react";

import { PlusCircleIcon } from "@heroicons/react/solid";

interface IProps {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  handleAddUser: (isChecked: boolean) => void;
}

const Modal: React.FC<IProps> = ({
  setIsModalOpen,
  setEmail,
  handleAddUser,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <PlusCircleIcon className="text-red-500" />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Invite User
                </h3>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Enter the email of the user you want to add to the company
                  </p>
                </div>

                <div className="form-check form-switch flex items-center my-2">
                  <input
                    onChange={() => setIsChecked(!isChecked)}
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                    checked={isChecked}
                  />
                  <label
                    className="form-check-label inline-block text-gray-600 ml-3 text-sm "
                    htmlFor="flexSwitchCheckChecked"
                  >
                    Give Admin access to this user?
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    className="text-sm text-gray-500 h-10 rounded-md outline-blue-300 w-full bg-gray-100 p-2"
                    placeholder="Enter Email Address"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={() => handleAddUser(isChecked)}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-700 text-base font-medium text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Invite
            </button>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
