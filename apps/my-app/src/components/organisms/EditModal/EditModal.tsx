import EditForm from "@/components/molecules/EditForm/EditForm";
import Modal from "@/components/molecules/Modal/Modal";
import useModal from "@/hooks/useModal";
import useTodoStore from "@/hooks/todoStore";

const EditModal = (props: { todo: Todo }) => {
  const { todo } = props;
  const { show, openModal, closeModal } = useModal();

  const updateTodo = useTodoStore((actions) => actions.updateTodo);
  
  return (
  <Modal 
      openModal={openModal}
      closeButton={true} 
      modalButton="수정"
      isOpen={show}
      closeModal={closeModal}
    >
      <EditForm
        todo={todo}
        updateTodo={updateTodo}
        errorMessage="제목은 필수 값입니다." 
        closeModal={closeModal}
      />
    </Modal>
  )
}

export default EditModal;