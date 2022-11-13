import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import React, { useState } from "react";
import Button from "./Button";

type Props = {
  children: React.ReactNode;
  className?: string;
  collapsible?: boolean;
  title: string;
};

export default function Section({
  children,
  title,
  collapsible,
  className,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const shouldShowContent = !collapsible || (collapsible && expanded);
  return (
    <div
      className={classNames(
        "flex flex-col items-stretch rounded-lg p-2 bg-background bg-opacity-50",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs pb-1">{title}</span>
        {collapsible && (
          <Button
            icon={expanded ? faCaretUp : faCaretDown}
            onClick={() => setExpanded(!expanded)}
          />
        )}
      </div>
      {shouldShowContent && children}
    </div>
  );
}
