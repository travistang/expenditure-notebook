import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  icon: IconDefinition;
  text: string;
  className?: string;
};
export default function CenterNotice({ className, text, icon }: Props) {
  return (
    <div className={classnames("vertical gap-2", className)}>
      <FontAwesomeIcon icon={icon} className="text-3xl" />
      <span className="font-bold uppercase">{text}</span>
    </div>
  );
}
