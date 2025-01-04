import { useEffect, useState } from "react";
import { Message } from "@/utils/types";

function useChat(chatType: string, roomId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);
  const apiUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables.");
  }

  const websocketUrl = `${apiUrl.replace("/api", "").replace(/^http/, "ws")}/ws/chat/${chatType}/${roomId}/`;

  useEffect(() => {
    const websocket = new WebSocket(websocketUrl);
    setWs(websocket);

    websocket.onopen = () => {
      console.log("WebSocket connection opened");
    };

    websocket.onmessage = (event) => {
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
  }, [chatType, roomId]);

  const sendMessage = (message: string, sender_id: string, receiver_id?: string) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const messageData = receiver_id
        ? JSON.stringify({ message, sender_id, receiver_id })
        : JSON.stringify({ message, sender_id });

      ws.send(messageData);
    }
  };

  return { messages, sendMessage };
}

export default useChat;
