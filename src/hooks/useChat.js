import { useEffect, useState } from "react";

function useChat(roomId) {
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const websocket = new WebSocket(`ws://3.80.81.109:8000/ws/chat/${roomId}/`);
    setWs(websocket);

    websocket.onopen = function (event) {
      console.log("WebSocket connection opened");
    };

    websocket.onmessage = function (event) {
      console.log("Received message:", event.data);
      const data = JSON.parse(event.data);
      setMessages((prev) => [...prev, data.message]);
    };

    websocket.onerror = function (event) {
      console.error("WebSocket error observed:", event);
    };

    websocket.onclose = function (event) {
      console.log("WebSocket connection closed:", event);
    };

    return () => {
      websocket.close();
    };
  }, [roomId]);

  const sendMessage = (message, username) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const messageData = JSON.stringify({ message, username });
      console.log("Sending message:", messageData);
      ws.send(messageData);
    }
  };

  return { messages, sendMessage };
}

export default useChat;