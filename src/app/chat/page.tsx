"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import ChatWindow from "./chatWindow";
import { ChatMessage, next, reset } from "./mock";

const ChatApp: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isExpertConnected, setIsExpertConnected] = useState(false);

  useEffect(() => {
    const botMessage = next();
    if (botMessage) {
      setMessages([botMessage]);
    }
    return () => {
      reset();
    };
  }, []);

  const handleSendMessage = () => {
    if (userInput.trim()) {
      const newMessage = {
        sender: "User",
        receiver: "Chatbot",
        message: userInput,
        timestamp: new Date(),
      };
      setMessages([...messages, newMessage]);
      setUserInput("");
    }
  };

  const handleSelectOption = (option: string) => {
    const newMessage = {
      sender: "User",
      receiver: "Chatbot",
      message: option,
      timestamp: new Date(),
    };
    setMessages([...messages, newMessage]);
    setTimeout(() => {
      const botMessage = next();
      if (botMessage) {
        setMessages((prevMessages) => [...prevMessages, botMessage]);

        if (botMessage?.connected) {
          const lastMessage = next();
          if (lastMessage) {
            setIsExpertConnected(true);
            setMessages((prevMessages) => [...prevMessages, lastMessage]);
          }
        }
      }
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <ChatWindow messages={messages} onSelectOption={handleSelectOption} />
      <div className="flex p-4 bg-white border-t border-gray-300">
        <Input
          className="flex-grow border rounded-lg p-2"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          placeholder="Type a message..."
        />
        <Button
          className="ml-2 bg-brand text-white rounded-lg px-4 py-2"
          onClick={handleSendMessage}
          disabled={!isExpertConnected}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatApp;
