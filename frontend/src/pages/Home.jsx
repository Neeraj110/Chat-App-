/* eslint-disable no-unused-vars */
// App.jsx
import React from "react";
import SideBar from "../components/sidebar/SideBar";
import MessageContainer from "../components/message/MessageContainer";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="w-[60%] h-[85%] flex  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <SideBar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default App;
