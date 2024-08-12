import { create } from "zustand";

interface editType {
  edit: boolean;
  showEdit: () => void;
  hideEdit: () => void;
};

const useEdit = create<editType>((set) => ({
  edit: false,
  showEdit: () => set({edit: true}),
  hideEdit: () => set({edit: false}),
}));

export default useEdit;