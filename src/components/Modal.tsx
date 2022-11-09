import classnames from "classnames";

export type ModalControlProps = {
  opened: boolean;
  onClose: () => void;
};
type Props = ModalControlProps & {
  title: string;
  className?: string;
  children: React.ReactNode;
};
export default function Modal({
  children,
  title,
  opened,
  onClose,
  className,
}: Props) {
  if (!opened) {
    return null;
  }
  return (
    <div
      className="fixed z-10 inset-0 flex flex-col items-stretch justify-end bg-color-700 bg-opacity-60 bg-background"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classnames(
          "rounded-t-xl shadow-lg w-full bg-primary-600 text-font vertical overflow-y-auto bg-background-secondary",
          className ?? "h-2/3 p-2"
        )}
      >
        <span className="font-bold text-sm text-font sticky -top-4 pt-4 pb-4 bg-background-secondary rounded-t-lg">
          {title}
        </span>
        {children}
      </div>
    </div>
  );
}
