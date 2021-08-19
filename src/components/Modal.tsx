import classnames from "classnames";

type Props = {
  opened: boolean;
  title: string;
  onClose: () => void;
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
    <div className="fixed z-10 inset-0 vertical filter blur-md bg-color-700 bg-opacity-30">
      <div onClick={onClose} className="flex-1" />
      <div
        className={classnames(
          "rounded-t-lg bg-color-100 vertical overflow-y-scroll",
          className || "h-1/3 p-2"
        )}
      >
        <span className="uppercase font-bold text-md text-primary-500">
          {title}
        </span>
        {children}
      </div>
    </div>
  );
}
