import { useSelector } from "react-redux";
import useGetMessages from "../../hooks/getMessage";
import useListenMessages from "../../hooks/useListenMessage";
import Message from "./Message";
import { useEffect, useRef } from "react";

const AllMessages = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef();
  const selectConversation = useSelector(
    (state) => state.conversation.selectedConversation
  );

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        selectConversation &&
        Array.isArray(messages) &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} key={message._id} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default AllMessages;
