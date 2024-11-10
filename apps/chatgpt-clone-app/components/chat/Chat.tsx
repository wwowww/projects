"use client";

import Empty from "./Empty";
import Message from "./Message";
import AutoResizingTextarea from "./AutoResizingTextarea";
import { useRef } from "react";
import { Button } from "../ui/button";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";
import { useChat, Message as TMessage } from "ai/react";
import { useModelStore } from "@/store/model";
import { useParams, useRouter } from "next/navigation";
import { createConversation, addMessages } from "@/actions/conversation";
import { CHAT_ROUTES } from "@/constants/routes";
import { useUserStore } from "@/store/user";

type ChatProps = {
  initialMessages?: TMessage[];
}

const Chat = ({ initialMessages }: ChatProps) => {
  const params = useParams<{conversationId: string}>();
  const router = useRouter();
  const user = useUserStore((state) => state.user);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { messages, setMessages, input, handleInputChange, handleSubmit } = useChat({
    onFinish: async(message) => {
      // param -> conversationId가 없으면 새로운 대화 페이지
      if (!params.conversationId) {
        // 1. create conversation
        const conversation = await createConversation(input);
        // 2. add message
        await addMessages(conversation.id, input, message.content);

        router.push(`${CHAT_ROUTES.CONVERSATIONS}/${conversation.id}`);
      } else {
        // param -> conversationId가 있으면 기존 대화 페이지
        // 1. add messages
        await addMessages(params.conversationId, input, message.content);
        
      }
    }
  });
  const model = useModelStore((state) => state.model);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (initialMessages) {
      setMessages(initialMessages);
    }
  }, [initialMessages, setMessages]);

  return (
    <div className="flex flex-col w-[80%] h-full mx-auto">
      <div className="flex-1">
        {!params.conversationId && messages.length === 0 ? (
          <Empty />
        ) : (
        <>
          {messages.map((message) => (
            <Message
              key={message.id}
              name={user.name}
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