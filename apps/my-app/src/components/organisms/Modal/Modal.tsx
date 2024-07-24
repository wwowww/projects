import { ReactNode } from "react";
import useModal from "@/hooks/useModal";

type ModalProps = {
  children: ReactNode;
  modalButton: ReactNode | string;
  closeButton?: boolean;
};

const Modal = ({ children, modalButton, closeButton=false }: ModalProps) => {
  const { isOpen, ClickModal, ClosedModal } = useModal();

  return (
    <>
      <button onClick={ClickModal}>{modalButton}</button> 
      {isOpen && (
        <div>
          {closeButton && <button onClick={ClosedModal}>x</button>}
          {children}
        </div>
      )}
    </>
  )
}

export default Modal;