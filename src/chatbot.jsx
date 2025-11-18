
import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const botReply = {
      sender: "bot",
      text: getCareerReply(input),
    };

    setMessages((prev) => [...prev, botReply]);
    setInput("");
  };

const qaPairs = [
  { q: ["career", "guide"], a: "Tell me your interest area — tech, design, business, or something else?" },
  { q: ["tech", "developer", "coding"], a: "Tech includes Web Dev, Cybersecurity, AI, ML, App Dev, and Cloud Computing." },
  { q: ["web", "frontend", "backend", "fullstack"], a: "For Web Dev: Learn HTML → CSS → JS → React → Node.js." },
  { q: ["cyber", "hacking", "security"], a: "Cybersecurity includes Network Security, SOC Analyst, Ethical Hacking, and Cloud Security." },
  { q: ["design", "ui", "ux"], a: "UI/UX Design includes wireframing, prototyping, user research, and visual design." },
  { q: ["ai", "ml", "data"], a: "AI/ML careers require Python, Maths, Data Analysis, and ML algorithms." },
  { q: ["business", "management"], a: "Business careers include Marketing, Finance, HR, Operations, and Management." },
  { q: ["graphic", "illustration"], a: "Graphic Design involves Photoshop, Illustrator, composition, and branding." },
];

const getCareerReply = (msg) => {
    msg = msg.toLowerCase();

    if (msg.includes("career") || msg.includes("guide")) {
      return "Tell me your interest area — tech, design, business, or something else?";
    }
    if (msg.includes("tech")) {
      return "Tech offers fields like Web Dev, Cybersecurity, AI, and App Dev.";
    }
    if (msg.includes("design")) {
      return "Design includes UI/UX, Graphic Design, and Product Design.";
    }
    if (msg.includes("business")) {
      return "Business careers include Marketing, Finance, HR, and Management.";
    }

    return "I’m here to guide your career. Ask me anything!";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="chatbot-root">
      
      <div className="chatbot-card">
        <h2 className="chatbot-title">Career Guidance Chatbot</h2>

        <div className="chat-window" ref={scrollRef}>
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.sender === "user" ? "message-user" : "message-bot"}`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask something..."
            className="chat-input"
          />
          <button onClick={handleSend} className="chat-send">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}


