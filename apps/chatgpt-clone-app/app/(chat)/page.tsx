import Chat from "@/components/chat/Chat";

type PageProps = {
  params: {
    conversationId: string;
  }
}

const ChatPage = ({ params: {conversationId}}: PageProps) => {
  return (
    <Chat />
  )
}

export default ChatPage;