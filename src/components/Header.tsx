import { faClipboard, faHome, faList, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PageList } from "../pageList";
import ClipboardModal from "./ClipboardModal";

type Props = {
  currentPage: PageList;
  goPage: (page: PageList) => void;
};
export default function Header({ currentPage, goPage }: Props) {
  const goingPage =
    currentPage === PageList.HOME_PAGE
      ? PageList.RECORD_LIST_PAGE
      : PageList.HOME_PAGE;
  const goingPageIcon = goingPage === PageList.HOME_PAGE ? faHome : faList;
  const go = () => goPage(goingPage);

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
          <FontAwesomeIcon
            icon={goingPageIcon}
            onClick={go}
            className="cursor-pointer"
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
