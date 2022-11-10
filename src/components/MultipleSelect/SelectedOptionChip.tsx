import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

type Props = {
  text: string;
  onDelete: () => void;
  className?: string;
};

export default function SelectedOptionChip({ className, text, onDelete }: Props) {
  return (
    <div
      onClick={onDelete}
      className={classNames(
        "horizontal-center px-2 py-1 rounded-md bg-background-secondary text-sm text-font",
        className
      )}
    >
      <span className="pr-1">{text}</span>
      <FontAwesomeIcon icon={faTimes} className="pl-1 w-8 h-8" />
    </div>
  );
}
