import { useEffect, useState } from "react";
import { Message } from '@/utils/types';

function useChat(roomId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables.");
  }
  const websocketUrl = apiUrl.replace("/api", "").replace(/^http/, "ws") + `/ws/chat/${roomId}/`;
  
  

  useEffect(() => {
    const websocket = new WebSocket(websocketUrl);
    setWs(websocket);

    websocket.onopen = (event) => {
      console.log("WebSocket connection opened");
    };

    websocket.onmessage = (event) => {
      console.log("Received message:");
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data]);
    };

    websocket.onerror = (event) => {
      console.error("WebSocket error observed:", event);
    };

    websocket.onclose = (event) => {
      console.log("WebSocket connection closed:", event);
    };

    return () => {
      websocket.close();
    };
  }, [roomId]);

  const sendMessage = (message: string, username: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const messageData = JSON.stringify({ message, username });
      console.log("Sending message:", messageData);
      ws.send(messageData);
    }
  };

  return { messages, sendMessage };
}

export default useChat;
