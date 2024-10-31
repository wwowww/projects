import { MessageSquare, Plus } from "lucide-react";
import { BASE_URL, CHAT_ROUTES } from "@/constants/routes";
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import LogoutButton from "./LogoutButton";
import { getConversationsByUser } from "@/data/user";

const NEW_SIDEBAR_ITEM = {
  id: "new",
  label: "새로운 대화",
  icon: <Plus />,
  href: BASE_URL
};

const Sidebar = async () => {
  const conversations = await getConversationsByUser();
  
  const formattedItems = [
    NEW_SIDEBAR_ITEM,
    ...conversations.map((conversation) => ({
      id: conversation.id,
      label: conversation.name || "",
      icon: <MessageSquare />,
      href: `${CHAT_ROUTES.CONVERSATIONS}/${conversation.id}`,
    })),
  ];

  return (
    <nav className="h-full p-3 bg-black flex flex-col text-white">
      <div className="flex-1 overflow-y-auto">
      <Logo />
        <div className="flex flex-col gap-2 mt-10">
          {formattedItems.map((item) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <LogoutButton />
      </div>
    </nav>
  )
}

export default Sidebar;