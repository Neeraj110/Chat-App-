/* eslint-disable no-unused-vars */
// Sidebar.jsx

import { useState } from "react";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../../hooks/getUserInfo";
import { getRandomEmoji } from "../../utils/emoji";
import ListOfUser from "./ListOfUser";
import { setSelectedConversation } from "../../slices/conversationSlice";
import LogoutButton from "./LogoutBtn";

const Sidebar = () => {
  const { conversations } = getUserInfo();
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredConversations = conversations.filter((conversation) =>
    conversation.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleConversationSelect = (conversation) => {
    dispatch(setSelectedConversation(conversation));
  };



  return (
    <div className="relative w-1/3 bg-gray-800  flex flex-col overflow-hidden no-scrollbar">
      <div className="p-4 bg-gray-800">
        <input
          type="text"
          placeholder="Search users..."
          className="w-full px-3 py-2 text-gray-800 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-y-auto p-3">
        {Array.isArray(filteredConversations) &&
          filteredConversations.map((conversation, idx) => (
            <div
              key={conversation._id}
              onClick={() => handleConversationSelect(conversation)}
              className="cursor-pointer"
            >
              <ListOfUser
                conversation={conversation}
                emoji={getRandomEmoji()}
                lastIdx={idx === filteredConversations.length - 1}
              />
            </div>
          ))}
      </div>

      <div className="bg-gray-800 w-full p-4 flex justify-center items-center">
        <button className="text-white text-2xl">
          <LogoutButton />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
