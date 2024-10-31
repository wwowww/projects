import Chat from "@/components/chat/Chat";

type PageProps = {
  params: {
    conversationId: string;
  }
}

const ConversationPage = ({ params: { conversationId } }: PageProps) => {
  return <Chat />
}

export default ConversationPage;