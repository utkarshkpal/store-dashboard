import React from "react";

interface MessageProps {
  sender: string;
  message: string;
  time: string;
}

const Message: React.FC<MessageProps> = ({ sender, message, time }) => {
  const isUser = sender === "User";

  return (
    <div className={`my-2 ${isUser ? "text-right" : "text-left"}`}>
      <div
        className={`inline-block p-2 rounded-lg ${
          isUser ? "bg-brand text-white" : "bg-brandlight text-black"
        }`}
      >
        {message}
        <div className="text-xs text-right text-gray-500">{time}</div>
      </div>
    </div>
  );
};

export default Message;
