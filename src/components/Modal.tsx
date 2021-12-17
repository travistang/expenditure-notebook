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
      className="fixed z-10 inset-0 p-4 center bg-color-700 bg-opacity-60"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={classnames(
          "rounded-lg w-full bg-primary-600 text-color-100 vertical overflow-y-auto",
          className || "h-2/3 p-2"
        )}
      >
        <span className="uppercase font-bold text-md text-color-100 mb-2">
          {title}
        </span>
        {children}
      </div>
    </div>
  );
}
