import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  text: string;
  onDelete: () => void;
};

export default function SelectedOptionChip({ text, onDelete }: Props) {
  return (
    <div
      onClick={onDelete}
      className="horizontal-center px-2 py-1 rounded-md bg-primary-100 text-sm text-color-100"
    >
      <span className="pr-1">{text}</span>
      <FontAwesomeIcon icon={faTimes} className="pl-1 w-8 h-8" />
    </div>
  );
}
