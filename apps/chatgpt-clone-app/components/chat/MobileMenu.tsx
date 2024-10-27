"use client";

import { ReactNode } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { useSheetStore } from '@/store/sheet';

const MobileMenu = ({children}: {children: ReactNode}) => {
  const {open, setOpen} = useSheetStore((state) => ({
    open: state.open,
    setOpen: state.setOpen,
  }));

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
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