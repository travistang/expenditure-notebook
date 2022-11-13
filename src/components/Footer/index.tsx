import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FooterConfig, PageList } from "../../pageList";

type FooterTabProps = {
  icon: IconProp;
  onClick: () => void;
};
function FooterTab({ icon, onClick }: FooterTabProps) {
  return <FontAwesomeIcon icon={icon} onClick={onClick} />;
}
type Props = {
  route: PageList;
  onChangeRoute: (route: PageList) => void;
};
export default function Footer({ route, onChangeRoute }: Props) {
  return (
    <div className="py-2 flex items-center justify-between h-10 bg-background px-8">
      {Object.entries(FooterConfig).map(([page, icon]) => (
        <FooterTab
          icon={icon}
          onClick={() => onChangeRoute(page as PageList)}
        />
      ))}
    </div>
  );
}
