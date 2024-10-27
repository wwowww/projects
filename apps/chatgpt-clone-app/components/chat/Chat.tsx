import { message } from "@/db/schema";
import Empty from "./Empty";
import Message from "./Message";

const MESSAGE_DUMMY = [
  {id: "1", content: "더미데이터1", role: "user"},
  {id: "2", content: "더미데이터2", role: "assistant"},
]

const Chat = () => {
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
    </div>
  )
}

export default Chat;