import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type MessageProps = {
  name?: string;
  content?: string;
  role: string;
}

const Message = ({ name="User", content="", role }: MessageProps) => {
  const isAssistant = role === "assistant";
  const avatarName = isAssistant ? "Chat GPT" : name;

  return (
    <div className="flex items-start gap-2 mb-5">
      <Avatar 
        className={cn("flex items-center justify-center mt-1.5 p-1 h-8 w-8 min-w-8 rounded-full",
        isAssistant ? "border border-black" : "bg-slate-200"
      )}>
        <AvatarImage src={isAssistant ? "/logo.svg" : ""} alt="avatar" />
        <AvatarFallback>{avatarName[0]}</AvatarFallback>
      </Avatar>
      <div className="mt-2">
        <h2 className="font-bold">{avatarName}</h2>
        <div className="mt-2 whitespace-break-spaces">{content}</div>
      </div>
    </div>
  )
}

export default Message;