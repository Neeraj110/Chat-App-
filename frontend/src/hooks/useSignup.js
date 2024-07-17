import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { setCredential } from "../slices/authSlice";
import { toast } from "react-toastify";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signup = async ({ fullName, username, password, gender }) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/signup", {
        fullName,
        username,
        password,
        gender,
      });
      dispatch(setCredential(data));
      toast.success("Signup successful");
      setLoading(false);
    } catch (err) {
      toast.error("Invalid credentials");
      setLoading(false);
    }
  };

  return { loading, signup };
};
