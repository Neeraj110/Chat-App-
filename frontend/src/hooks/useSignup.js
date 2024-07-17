import { useDispatch } from "react-redux";
import axios from "axios";
import { useState } from "react";
import { setCredential } from "../slices/authSlice";
import { toast } from "react-toastify";

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const signup = async (fullName, username, password, gender) => {
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
    } catch (err) {
      console.error("Signup error:", err);
      toast.error("Failed to signup");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};
