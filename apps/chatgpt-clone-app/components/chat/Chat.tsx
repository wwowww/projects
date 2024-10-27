"use client";

import { message } from "@/db/schema";
import Empty from "./Empty";
import Message from "./Message";
import AutoResizingTextarea from "./AutoResizingTextarea";
import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";

const MESSAGE_DUMMY = [
  {id: "1", content: "더미데이터1", role: "user"},
  {id: "2", content: "더미데이터2", role: "assistant"},
]

const Chat = () => {
  const [value, setValue] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [])

  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      <div className="flex-1">
        {MESSAGE_DUMMY.length === 0 ? (
          <Empty />
        ) : (
        <>
          {MESSAGE_DUMMY.map((message) => (
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
        <form className="flex justify-center gap-4 items-end">
          <AutoResizingTextarea
            value={value}
            onChange={e => setValue(e.target.value)}
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