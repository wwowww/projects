import { ReactNode } from "react";
import Header from "@/components/chat/Header";
import Sidebar from "@/components/chat/Sidebar";

const ChatLayout = ({children}: {children: ReactNode}) => {
  return (
    <div className="md:flex h-full">
      <div className="hidden md:block w-[300px]">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 h-full overflow-y-auto">
          <Header />
          {children}
        </div>
    </div>
  )
}

export default ChatLayout;