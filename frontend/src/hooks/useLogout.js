/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { useDispatch } from "react-redux";
import { logoutSuccess } from "../slices/authSlice";
import { useState } from "react";
import { toast } from "react-toastify";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Contnet-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.error) return toast.error(data.error);
      dispatch(logoutSuccess());
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return { loading, logout };
};
