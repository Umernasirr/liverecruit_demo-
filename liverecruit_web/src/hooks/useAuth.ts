import axios from "axios";

import React from "react";

const useAuth = () => {
  const [user, setUser] = React.useState<any>(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState<boolean>(false);

  const login = async (email: string, password: string) => {
    // make api call

    try {
      const response = await axios.post(
        "http://localhost:4000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (!response) return;

      if (response?.status === 200 && response?.data?.token) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
      }

      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    // make api call
    localStorage.removeItem("token");
  };

  React.useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  return {
    user,
    isAuthenticated,
    login,
    logout,
  };
};

export default useAuth;
