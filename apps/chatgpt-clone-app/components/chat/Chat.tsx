"use client";

import Empty from "./Empty";
import Message from "./Message";
import AutoResizingTextarea from "./AutoResizingTextarea";
import { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";
import { useChat } from "ai/react";
import { useModelStore } from "@/store/model";

const Chat = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const model = useModelStore((state) => state.model);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      <div className="flex-1">
        {messages.length === 0 ? (
          <Empty />
        ) : (
        <>
          {messages.map((message) => (
            <Message
              key={message.id}
              name={"user"}
              content={message.content}
              role={message.role}
              />
          ))}
        </>
      )}
      </div>
      <div className="pb-5 sticky bottom-0 bg-white">
        <form
          className="flex justify-center gap-4 items-end"
          onSubmit={(e) => handleSubmit(e, { data: { model } })}
        >
          <AutoResizingTextarea
            value={input}
            onChange={handleInputChange}
          />
          <Button type="submit" size="icon">
            <ArrowUp />
          </Button>
        </form>
      </div>
      <div ref={scrollRef}></div>    
    </div>
  )
}

export default Chat;