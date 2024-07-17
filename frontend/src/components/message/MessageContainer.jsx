import { useDispatch, useSelector } from "react-redux";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import { setSelectedConversation } from "../../slices/conversationSlice";
import { useEffect } from "react";
import AllMessages from "./AllMessages";

const MessageContainer = () => {
  const selectedConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // Cleanup function to reset selectedConversation when unmounting
    return () => dispatch(setSelectedConversation(null));
  }, [dispatch]);

  return (
    <div className="w-full md:w-2/3 flex flex-col relative">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <header className="text-white flex items-center justify-start gap-3 p-4 bg-gray-800">
            <img
              loading="lazy"
              src={selectedConversation.profilePic}
              alt="userImage"
              className="w-12 h-12 md:w-16 md:h-16 rounded-full"
            />
            <h1 className="text-lg md:text-2xl font-semibold truncate">
              {selectedConversation.fullName || "Unknown User"}
            </h1>
          </header>

          <div className="flex-1 overflow-y-auto p-4 bg-white">
            <AllMessages />
          </div>

          <footer className="bg-white border-t border-gray-300 p-4">
            <MessageInput />
          </footer>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {user.fullName} ❄</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
