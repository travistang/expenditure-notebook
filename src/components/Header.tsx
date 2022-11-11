import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ClipboardModal from "./ClipboardModal";

export default function Header() {
  const [clipboardModalOpen, setClipboardModalOpen] = React.useState(false);

  return (
    <>
      <header className="h-16 flex-0 flex items-center relative">
        <span className="text font-bold flex items-center gap-2">
          Expenditure logbook
        </span>
        <div className="absolute right-0 top-0 h-full horizontal-center gap-4 text-xl">
          <FontAwesomeIcon
            icon={faClipboard}
            className="cursor-pointer"
            onClick={() => setClipboardModalOpen(true)}
          />
        </div>
      </header>
      <ClipboardModal
        opened={clipboardModalOpen}
        onClose={() => setClipboardModalOpen(false)}
      />
    </>
  );
}
