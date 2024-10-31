import Chat from "@/components/chat/Chat";
import { getMessagesByConversation } from "@/data/conversation";

type PageProps = {
  params: {
    conversationId: string;
  }
}

const ChatPage = async ({ params: {conversationId}}: PageProps) => {
  const messages = await getMessagesByConversation(conversationId);
  return (
    <Chat initialMessages={messages} />
  )
}

export default ChatPage;