import React from "react";
import "./ChitChat.css";
import chitChatImg from "../../assets/chitChat.png";
import Card from "@mui/material/Card";
const Chitchat = () => {
  return (
    <>
      <div className=" flex justify-center">
        <h1 className="my-4 bg-white w-50 border-2 border-black p-2">
          Without Tailwind CSS
        </h1>
      </div>
      <div className="bg-white w-[52vw] mx-auto border-2 border-black">
        <div className="shadow-lg shadow-indigo-500/40 chat-notification">
          <div className="chat-notification-logo-wrapper">
            <img
              className="chat-notification-logo"
              src={chitChatImg}
              alt="ChitChat Logo"
            />
          </div>
          <div className="chat-notification-content">
            <h4 className="chat-notification-title">ChitChat</h4>
            <p className="chat-notification-message">You have a new message!</p>
          </div>
        </div>
        <div className="mt-10">
          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=626&ds=true&dsyoff=100px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522chat-notification%2522%253E%250A%2520%2520%253Cdiv%2520className%253D%2522chat-notification-logo-wrapper%2522%253E%250A%2520%2520%2520%2520%253Cimg%250A%2520%2520%2520%2520%2520%2520className%253D%2522chat-notification-logo%2522%250A%2520%2520%2520%2520%2520%2520src%253D%257BchitChatImg%257D%250A%2520%2520%2520%2520%2520%2520alt%253D%2522ChitChat%2520Logo%2522%250A%2520%2520%2520%2520%252F%253E%250A%2520%2520%253C%252Fdiv%253E%250A%2520%2520%253Cdiv%2520className%253D%2522chat-notification-content%2522%253E%250A%2520%2520%2520%2520%253Ch4%2520className%253D%2522chat-notification-title%2522%253EChitChat%253C%252Fh4%253E%250A%2520%2520%2520%2520%253Cp%2520className%253D%2522chat-notification-message%2522%253EYou%2520have%2520a%2520new%2520message%21%253C%252Fp%253E%250A%2520%2520%253C%252Fdiv%253E%250A%253C%252Fdiv%253E%250A"
            style={{
              width: "100%",
              height: "440px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>

          <iframe
            src="https://carbon.now.sh/embed?bg=rgba%28171%2C+184%2C+195%2C+1%29&t=seti&wt=none&l=auto&width=626&ds=true&dsyoff=100px&dsblur=100px&wc=true&wa=false&pv=0px&ph=0px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=.chat-notification%2520%257B%250A%2520%2520%2520%2520display%253A%2520flex%253B%250A%2520%2520%2520%2520max-width%253A%252024rem%253B%250A%2520%2520%2520%2520margin%253A%25200%2520auto%253B%250A%2520%2520%2520%2520padding%253A%25201.5rem%253B%250A%2520%2520%2520%2520border-radius%253A%25200.5rem%253B%250A%2520%2520%2520%2520background-color%253A%2520%2523fff%253B%250A%2520%2520%2520%2520box-shadow%253A%25200%252020px%252025px%2520-5px%2520rgba%280%252C%25200%252C%25200%252C%25200.1%29%252C%25200%252010px%252010px%2520-5px%2520rgba%280%252C%25200%252C%25200%252C%25200.04%29%253B%250A%2520%2520%257D%250A%2520%2520.chat-notification-logo-wrapper%2520%257B%250A%2520%2520%2520%2520flex-shrink%253A%25200%253B%250A%2520%2520%257D%250A%2520%2520.chat-notification-logo%2520%257B%250A%2520%2520%2520%2520height%253A%25203rem%253B%250A%2520%2520%2520%2520width%253A%25203rem%253B%250A%2520%2520%257D%250A%2520%2520.chat-notification-content%2520%257B%250A%2520%2520%2520%2520margin-left%253A%25201.5rem%253B%250A%2520%2520%2520%2520padding-top%253A%25200.25rem%253B%250A%2520%2520%257D%250A%2520%2520.chat-notification-title%2520%257B%250A%2520%2520%2520%2520color%253A%2520%25231a202c%253B%250A%2520%2520%2520%2520font-size%253A%25201.25rem%253B%250A%2520%2520%2520%2520line-height%253A%25201.25%253B%250A%2520%2520%257D%250A%2520%2520.chat-notification-message%2520%257B%250A%2520%2520%2520%2520color%253A%2520%2523718096%253B%250A%2520%2520%2520%2520font-size%253A%25201rem%253B%250A%2520%2520%2520%2520line-height%253A%25201.5%253B%250A%2520%2520%257D"
            style={{
              width: "100%",
              height: "700px",
              border: "0",
              transform: "scale(1)",
              overflow: "hidden",
            }}
            sandbox="allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Chitchat;
