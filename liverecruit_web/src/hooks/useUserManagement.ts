import axios from "axios";

import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import { v4 as uuidv4 } from "uuid";
const useUserManagement = () => {
  const [users, setUsers] = useState<any>([]);
  const { isAuthenticated } = useAuth();

  const getUsers = async () => {
    const response = await axios.get("http://localhost:4000/api/users");

    if (!response?.data?.success) return new Error(response.statusText);

    setUsers(response.data.data);
  };

  const inviteUser = async (email: string, isAdmin: boolean) => {
    // make api call

    if (!isAuthenticated) return;

    try {
      const tempPass = uuidv4();
      const response = await axios.post("http://localhost:4000/api/users", {
        email,
        password: tempPass,
        role: isAdmin ? "admin" : "recruiter",
      });

      if (!response?.data?.success) return;

      setUsers([...users, response.data.data]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return {
    users,
    setUsers,
    inviteUser,
    getUsers,
  };
};

export default useUserManagement;
