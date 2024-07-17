import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../slices/conversationSlice";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, selectedConversation } = useSelector((state) => state.conversation);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        if (!selectedConversation || !selectedConversation._id) {
          return; // Exit early if selectedConversation or _id is null or undefined
        }
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        if (data.error) throw new Error(data.error);
        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation) {
      getMessages();
    }
  }, [selectedConversation, dispatch]);

  return { messages, loading };
};

export default useGetMessages;
