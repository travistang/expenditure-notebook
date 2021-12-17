import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faQrcode } from "@fortawesome/free-solid-svg-icons";

type Props = {
  onSubmit: () => void;
  onOpenUploadModal: () => void;
};
export default function SubmitButton({ onOpenUploadModal, onSubmit }: Props) {
  return (
    <div className="h-1/6 md:h-1/3 center w-full relative">
      <button
        onClick={onSubmit}
        className="h-20 w-20 md:h-96 md:w-96 rounded-full bg-secondary-500 text-xl md:text-7xl"
      >
        <FontAwesomeIcon icon={faPen} />
      </button>
      <div className="absolute right-0 top-0 h-full horizontal-center gap-2">
        <button
          onClick={onOpenUploadModal}
          className="text-3xl md:text-7xl rounded-full center h-12 w-12 bg-color-50 text-primary-700"
        >
          <FontAwesomeIcon icon={faQrcode} className="text-primary-700" />
        </button>
      </div>
    </div>
  );
}
