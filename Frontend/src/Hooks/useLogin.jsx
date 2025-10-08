import { useState, useEffect } from "react";
import axios from "axios";

export const useLogin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authCheck = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:8080/auth/token", {
          withCredentials: true,
        });
        setUser(res?.data?.user); 
        setError(null);
      } catch (err) {
        setError(err.message || "Login failed");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    authCheck();
  }, []);

  return { user, loading, error };
};
