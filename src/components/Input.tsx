import classNames from "classnames";
import classnames from "classnames";
import OutsideClickHandler from 'react-outside-click-handler';

type Props = {
  children?: React.ReactNode;
  value: string;
  name: string;
  label: string;
  className?: string;
  inputClassName?: string;
  onChange: (value: string) => void;
  onOutsideClick?: () => void;
};
export default function Input({
  children,
  className,
  inputClassName,
  name,
  label,
  value,
  onChange,
  onOutsideClick = () => {},
}: Props) {
  return (
    <OutsideClickHandler onOutsideClick={onOutsideClick}>
      <div className="vertical gap-1">
        <label htmlFor={name}>{label}</label>
        <div
          className={classnames(
            "rounded-full bg-background-secondary p-4 horizontal",
            className
          )}
        >
          {children}
          <input
            className={classNames(
              "bg-background-secondary text-font w-full outline-none text-xl",
              inputClassName
            )}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </OutsideClickHandler>
  );
}
