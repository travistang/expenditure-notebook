import { faHome, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { PageList } from "../pageList";

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
  return (
    <header className="h-16 center relative">
      <span className="uppercase text-lg">Expenditure logbook</span>
      <div className="absolute right-0 top-0 h-full horizontal-center gap-4 text-xl">
        <FontAwesomeIcon
          icon={goingPageIcon}
          onClick={go}
          className="cursor-pointer"
        />
      </div>
    </header>
  );
}
