import Modal from "@/components/molecules/Modal/Modal";
import Form from "@/components/organisms/Form/Form";
import useModal from "@/hooks/useModal";

const InsertModal = () => {  
  const { show, openModal, closeModal } = useModal();

  return (
    <Modal 
      openModal={openModal}
      closeButton={true} 
      modalButton="새 노트"
      isOpen={show}
      closeModal={closeModal}
    >
      <Form
        errorMessage="제목은 필수 값입니다."
        closeModal={closeModal}
      />
    </Modal>
  )
};

export default InsertModal;