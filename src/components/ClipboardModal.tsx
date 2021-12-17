import React from "react";
import copy from "copy-to-clipboard";

import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import toast from "react-hot-toast";
import { LocalStorageContext } from "../contexts/LocalStorageContext";
import Modal, { ModalControlProps } from "./Modal";

type Props = ModalControlProps;

export default function ClipboardModal({ opened, onClose }: Props) {
  const { store } = React.useContext(LocalStorageContext);
  const copyToClipboard = () => {
    copy(JSON.stringify(store));
    toast.success("Copied store value to clipboard!");
  };
  return (
    <Modal
      title="Copy store content to clipboard"
      opened={opened}
      onClose={onClose}
    >
      <textarea
        id="store-text"
        className="shadow-inner rounded-lg bg-primary-700 code digit flex-1 resize-none"
        value={JSON.stringify(store)}
        contentEditable={false}
      />
      <div className="h-16 py-2 flex items-center justify-end">
        <button
          type="button"
          onClick={copyToClipboard}
          className="rounded-lg bg-secondary-500 gap-2 flex items-center p-2 h-full hover:bg-secondary-600"
        >
          <FontAwesomeIcon icon={faClipboard} />
          Copy to clipboard
        </button>
      </div>
    </Modal>
  );
}
