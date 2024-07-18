/* eslint-disable no-unused-vars */
// import { useEffect } from "react";
// import { useSocketContext } from "../context/SocketContext";
// import { useSelector, useDispatch } from "react-redux";
// import notificationSound from "../asstes/sounds/notification.mp3";
// import { setMessages } from "../slices/conversationSlice";

// const useListenMessages = () => {
//   const { socket } = useSocketContext();
//   const dispatch = useDispatch();
//   const { messages } = useSelector((state) => state.conversation);

//   useEffect(() => {
//     const handleNewMessage = (newMessage) => {
//       newMessage.shouldShake = true;
//       const sound = new Audio(notificationSound);
//       sound.play();
//       dispatch(setMessages([...messages, newMessage]));
//     };

//     if (socket) {
//       socket.on("newMessage", handleNewMessage);

//       return () => {
//         socket.off("newMessage", handleNewMessage);
//       };
//     }
//   }, [socket, dispatch, messages]);

//   // No additional cleanup necessary here unless handling additional resources
// };

//export default useListenMessages;

//----------------------------------------------------------------

import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import { useSelector, useDispatch } from "react-redux";
import notificationSound from "../asstes/sounds/notification.mp3";
import { setMessages } from "../slices/conversationSlice";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const { messages, selectedConversation } = useSelector(
    (state) => state.conversation
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (socket && selectedConversation) {
      const handleNewMessage = (newMessage) => {
        if(newMessage.senderId === selectedConversation._id){
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSound);
        sound.play();
        dispatch(setMessages([...messages, newMessage]));
      }
    }
      socket.on("newMessage", handleNewMessage);

      return () => {
        socket.off("newMessage", handleNewMessage);
      };
    }
  }, [socket, selectedConversation, dispatch, messages]);

  // No additional cleanup necessary here unless handling additional resources
};

export default useListenMessages;
