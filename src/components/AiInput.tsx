"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

import "./AInput.css";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/skiper-ui/skiper101";

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const AiInput = () => {
  const [toggle, setToggle] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const [value, setValue] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Jiya, Ankit's AI portfolio assistant. Ask me about his skills, projects, experience, or background.",
      isUser: false,
    },
  ]);

  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /*
   * Show tooltip periodically
   */
  useEffect(() => {
    if (toggle) {
      return;
    }

    let hideTimer: ReturnType<typeof setTimeout>;

    const interval = setInterval(() => {
      setTooltipOpen(true);

      hideTimer = setTimeout(() => {
        setTooltipOpen(false);
      }, 3000);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimer);
    };
  }, [toggle]);

  /*
   * Automatically open AI assistant once
   */
  useEffect(() => {
    const openTimer = setTimeout(() => {
      setToggle(true);
    }, 9000);

    const closeTimer = setTimeout(() => {
      setToggle(false);
    }, 13000);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(closeTimer);
    };
  }, []);

  /*
   * Scroll to latest message
   */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  /*
   * Send question to Jiya
   */
  const handleSend = async () => {
    const question = value.trim();

    if (!question || isLoading) {
      return;
    }

    const userMessage: Message = {
      id: Date.now(),
      text: question,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/jiya", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Failed to get response");
      }

      const aiMessage: Message = {
        id: Date.now() + 1,
        text: data.reply,
        isUser: false,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Jiya error:", error);

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          text: "Sorry, Jiya is temporarily unavailable. Please try again.",
          isUser: false,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  /*
   * Enter = send
   * Shift + Enter = new line
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="aiInput flex items-center">
      <motion.div layout>
        <motion.div
          className={cn("relative flex flex-col-reverse sm:flex-row items-start sm:items-end gap-2 overflow-hidden")}
          style={{
            borderRadius: 0,

          }}
          initial={{
            scale: 0,
            y: "100%",
          }}
          animate={{
            scale: 1,
            y: 0,
            width: toggle ? 530 : 60,
          }}
          transition={{
            type: "spring",
            bounce: 0.16,
          }}
        >
          {/* AI Avatar */}
          <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
            <TooltipTrigger asChild>
              <button
                type="button"
                onClick={() => {
                  setToggle((current) => !current);
                  setTooltipOpen(false);
                }}
                className="flex h-[60px] w-[60px] shrink-0 cursor-pointer items-center justify-center rounded-full border-2 border-gray-400 bg-background"
                aria-label="Open Jiya AI assistant"
              >
                <img
                  src="/av.png"
                  className="h-full w-full rounded-full object-cover"
                  alt="Jiya AI assistant"
                />
              </button>
            </TooltipTrigger>

            <TooltipContent side="bottom" sideOffset={8}>
              <p>👋 Hi! I'm Jiya, Ankit's AI assistant.</p>
            </TooltipContent>
          </Tooltip>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(5px)",
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  filter: "blur(5px)",
                }}
                className="flex w-[86vw] sm:w-[460px] flex-col gap-2 rounded-lg bg-[whitesmoke] p-2"
              >
                {/* Chat */}
                <div className="ai-chat-window">
                  <div className="ai-chat-header">
                    <div className="ai-chat-profile">
                      <img
                        src="/av.png"
                        alt="Jiya"
                        className="ai-chat-avatar"
                      />

                      <div>
                        <div className="ai-chat-name">Jiya</div>

                        <div className="ai-chat-status">
                          AI Portfolio Assistant
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="chat-container">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "chat-message",
                          message.isUser ? "user-message" : "ai-message",
                        )}
                      >
                        {!message.isUser && (
                          <div className="avatar ai-avatar">
                            <img src="/av.png" alt="Jiya" />
                          </div>
                        )}

                        <div className="message-bubble">
                          <div className="message-text">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {message.text}
                            </ReactMarkdown>
                          </div>
                        </div>

                        {message.isUser && (
                          <div className="avatar user-avatar">
                            <span>
                              <img src="./logo/lg2.png" alt="" />
                            </span>
                          </div>
                        )}
                      </div>
                    ))}

                    {isLoading && (
                      <div className="chat-message ai-message">
                        <div className="avatar ai-avatar">
                          <img src="/av.png" alt="Jiya" />
                        </div>

                        <div className="message-bubble">
                          <div className="typing-indicator">
                            <span />
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>

                  {/* Suggested questions */}
                  {messages.length === 1 && (
                    <div className="ai-suggestions">
                      <button
                        type="button"
                        onClick={() =>
                          setValue("What are Ankit's main technical skills?")
                        }
                      >
                        Skills
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setValue("Tell me about Ankit's projects.")
                        }
                      >
                        Projects
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          setValue("Tell me about Ankit's experience.")
                        }
                      >
                        Experience
                      </button>
                    </div>
                  )}
                </div>

                {/* Input */}
                <div className="search">
                  <input
                    type="text"
                    className="search__input"
                    placeholder="Ask me anything about Mr. Ankit..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isLoading}
                    maxLength={1000}
                    aria-label="Ask Jiya about Mr. Ankit"
                  />

                  <button
                    type="button"
                    className="search__button"
                    onClick={handleSend}
                    disabled={!value.trim() || isLoading}
                    aria-label="Send message"
                  >
                    {isLoading ? (
                      <span className="send-loader" />
                    ) : (
                      <svg
                        className="search__icon"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                    )}
                  </button>
                </div>

                <div className="ai-disclaimer">
                  Jiya only answers questions about Ankit and his professional
                  portfolio.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AiInput;
