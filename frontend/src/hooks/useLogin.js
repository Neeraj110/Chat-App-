import axios from "axios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCredential } from "../slices/authSlice";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/login", {
        username,
        password,
      });
      dispatch(setCredential(data));
      toast.success("Login successful");
      setLoading(false);
    } catch (err) {
      toast.error("Invalid credentials");
      setLoading(false);
    }
  };
  return { loading, login };
};
