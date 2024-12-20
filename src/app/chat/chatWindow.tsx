// src/app/chat/ChatWindow.tsx
import React from "react";
import Message from "./Message";
import Options from "./options";

interface ChatWindowProps {
  messages: {
    sender: string;
    message: string;
    timestamp: Date;
    options?: string[];
  }[];
  onSelectOption: (option: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  messages,
  onSelectOption,
}) => {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      {messages.map((msg, index) => (
        <Message
          key={index}
          sender={msg.sender}
          message={msg.message}
          time={msg.timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        />
      ))}
      {messages.length > 0 &&
        messages[messages.length - 1].sender === "Chatbot" &&
        messages[messages.length - 1].options && (
          <Options
            options={messages[messages.length - 1]?.options || []}
            onSelect={onSelectOption}
          />
        )}
    </div>
  );
};

export default ChatWindow;
