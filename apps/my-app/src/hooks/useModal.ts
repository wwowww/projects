import { useState, useCallback } from "react";

const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ClickModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, [])

  const ClosedModal = useCallback(() => {
    setIsOpen(false);
  }, [])

  return {
    isOpen,
    ClickModal,
    ClosedModal
  }
}

export default useModal;