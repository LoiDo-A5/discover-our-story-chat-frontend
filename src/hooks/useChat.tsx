import { useEffect, useState } from "react";
import { Message } from '@/utils/types';

function useChat(roomId: string) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    // const websocket = new WebSocket(`ws://127.0.0.1:8000/ws/chat/${roomId}/`);
    const websocket = new WebSocket(`ws://3.80.81.109:8000/ws/chat/${roomId}/`);
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
