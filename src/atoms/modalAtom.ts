import { atom, useSetRecoilState, useRecoilState } from "recoil";
import { Form } from "../backend/types";

export enum ModalType {
  None = "none",
  EditModal = "edit-modal",
}

type ModalConfig =
  | {
      type: ModalType.None;
    }
  | {
      type: ModalType.EditModal;
      expenditure: Form;
    };
export const modalAtom = atom<ModalConfig>({
  key: "modal",
  default: { type: ModalType.None },
});

export const useCloseModal = () => {
  const setModalAtom = useSetRecoilState(modalAtom);
  return () => setModalAtom({ type: ModalType.None });
};

export const useSetEditFormValue = () => {
  const [modalAtomValue, setModalAtomValue] = useRecoilState(modalAtom);
  return (field: keyof Form) => (value: Form[typeof field]) => {
    if (modalAtomValue.type !== ModalType.EditModal) {
      return;
    }
    setModalAtomValue({
      ...modalAtomValue,
      expenditure: {
        ...modalAtomValue.expenditure,
        [field]: value,
      },
    });
  };
};
