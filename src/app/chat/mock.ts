export interface ChatMessage {
  sender: string;
  receiver: string;
  message: string;
  timestamp: Date;
  options?: string[];
  connected?: boolean;
}

// const mockChatData: ChatMessage[] = [
//   {
//     sender: "Chatbot",
//     receiver: "User",
//     message:
//       "Hello! I am wingman ,your personal assistant in buying online. What product category are you interested in?",
//     timestamp: new Date("2023-10-01T10:05:00Z"),
//     options: ["Electronics", "Clothing", "Home Decor", "Books"],
//   },
//   {
//     sender: "User",
//     receiver: "Chatbot",
//     message: "Electronics.",
//     timestamp: new Date("2023-10-01T10:06:00Z"),
//   },
//   {
//     sender: "Chatbot",
//     receiver: "User",
//     message: "Great choice! What specific product are you looking for?",
//     timestamp: new Date("2023-10-01T10:07:00Z"),
//     options: ["Earphones", "Headphones", "Bluetooth Speakers", "Soundbars"],
//   },
//   {
//     sender: "User",
//     receiver: "Chatbot",
//     message: "Earphones.",
//     timestamp: new Date("2023-10-01T10:08:00Z"),
//   },
//   {
//     sender: "Chatbot",
//     receiver: "User",
//     message: "Connecting you with an expert on Earphones now.",
//     timestamp: new Date("2023-10-01T10:09:00Z"),
//   },
//   {
//     sender: "Expert",
//     receiver: "User",
//     message:
//       "Hi I am Derick! I am an avid audiophile and I'm here to help you with buying Earphones. What do you need assistance with?",
//     timestamp: new Date("2023-10-01T10:10:00Z"),
//   },
// ];

const mockChatData: ChatMessage[] = [
  {
    sender: "Chatbot",
    receiver: "User",
    message:
      "Hello! I am Wingman, I will help you connect with the right expert. What product category are you interested in?",
    timestamp: new Date("2023-10-01T10:05:00Z"),
    options: ["Electronics", "Clothing", "Home Decor", "Books"],
  },
  {
    sender: "Chatbot",
    receiver: "User",
    message: "Great choice! What specific product are you looking for?",
    timestamp: new Date("2023-10-01T10:07:00Z"),
    options: ["Earphones", "Headphones", "Bluetooth Speakers", "Soundbars"],
  },
  {
    sender: "Chatbot",
    receiver: "User",
    message: "Connecting you with an expert on Earphones now.....",
    timestamp: new Date("2023-10-01T10:09:00Z"),
    connected: true,
  },
  {
    sender: "Expert",
    receiver: "User",
    message:
      "Hi I am Derick! I am an avid audiophile and I'm here to help you with buying Earphones. What do you need assistance with?",
    timestamp: new Date("2023-10-01T10:10:00Z"),
  },
];

function fetchChatBotMessage() {
  let count = -1;

  return {
    reset: () => {
      count = -1;
    },
    next: () => {
      if (count >= mockChatData.length) {
        return null;
      }
      count++;
      return mockChatData[count];
    },
  };
}
const { next, reset } = fetchChatBotMessage();

export { next, reset };
