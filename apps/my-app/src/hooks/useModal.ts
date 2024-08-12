import { create } from "zustand";

interface modalType {
  show: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
};

const useModal = create<modalType>((set) => ({
  show: false,
  openModal: () => set({show: true}),
  closeModal: () => set({show: false}),
  toggleModal: () => set((state) => ({ show: !state.show })),
}));

export default useModal;