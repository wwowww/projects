import { db } from "@/db";
import { conversation } from "@/db/schema";
import { Message } from "ai";
import { eq } from "drizzle-orm";
export const getMessagesByConversation = async (id: string) => {
  const response = await db.query.conversation.findFirst({
    where: eq(conversation.id, id),
    with: {
      message: {
        orderBy: (conversation, { desc }) => [desc(conversation.updatedAt)],
      },
    },
  });
  return (response?.message || []) as Message[];
};