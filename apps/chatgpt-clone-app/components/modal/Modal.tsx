"use client"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useModalStore } from "@/store/modal";

const Modal = () => {
  const { open, closeModal, config } = useModalStore((state) => ({
    open: state.open,
    closeModal: state.closeModal,
    config: state.config
  }))

  const { title, description, content, footer } = config || {};

  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default Modal;