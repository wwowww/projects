import { ReactNode } from "react";
import Button from "@/components/atoms/Button/Button";
import style from "./Modal.module.scss";

type ModalProps = {
  openModal: any;
  isOpen: boolean;
  closeModal?: any;
  children?: ReactNode;
  modalButton: ReactNode | string;
  closeButton?: boolean;
  buttonPosition?: "left"| "right";
};

const Modal = ({ openModal, isOpen, children, modalButton, closeButton=false, closeModal }: ModalProps) => {
  return (
    <div className={style.wrap}>
      {/* <Button onClick={openModal} className={style.button}>{modalButton}</Button> */}
      {isOpen && (
        <div className={`${style.modal} ${style.buttonPosition}`}>
          {closeButton && <Button onClick={closeModal}>뒤로가기</Button>}
          {children}
        </div>
      )}
    </div>
  )
}

export default Modal;