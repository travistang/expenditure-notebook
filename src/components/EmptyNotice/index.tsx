import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React from "react";

type Props = {
  icon: IconProp;
  className?: string;
  title: string;
  description?: string;
};
export default function EmptyNotice({
  icon,
  className,
  title,
  description,
}: Props) {
  return (
    <div
      className={classNames(
        "flex flex-col gap-2 items-center justify-center",
        className
      )}
    >
      <FontAwesomeIcon icon={icon} className="text-5xl" />
      <div className="text-center text-xl">{title}</div>
      {description && <div className="text-center text-sm">{description}</div>}
    </div>
  );
}
