import { ReactNode } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const MobileMenu = ({children}: {children: ReactNode}) => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          {children}
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu;