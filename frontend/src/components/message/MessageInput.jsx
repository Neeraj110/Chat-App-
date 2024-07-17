import React, { useState } from "react";
import { useSendMessage } from "../../hooks/sendMessage";
import { IoSend } from "react-icons/io5";

function MessageInput() {
  const { sendMessage, loading } = useSendMessage();
  const [newMessage, setNewMessage] = useState("");
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage) return;
    await sendMessage(newMessage);
    setNewMessage("");
  };
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full p-2 rounded-md border border-gray-400 focus:outline-none focus:border-blue-500"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button
        className="bg-indigo-500 text-white px-4 py-3 rounded-md ml-2"
        onClick={handleSendMessage}
      >
        {loading ? <div className="loading loading-spinner"></div> : <IoSend/>}
      </button>
    </div>
  );
}

export default MessageInput;
