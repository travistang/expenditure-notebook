import classnames from "classnames";

type Props = {
  children?: React.ReactNode;
  value: string;
  name: string;
  label: string;
  className?: string;
  onChange: (value: string) => void;
};
export default function Input({
  children,
  className,
  name,
  label,
  value,
  onChange,
}: Props) {
  return (
    <div className="vertical gap-1">
      <label htmlFor={name}>{label}</label>
      <div
        className={classnames(
          "rounded-lg bg-primary-200 p-4 horizontal",
          className
        )}
      >
        {children}
        <input
          className="bg-primary-200 w-full outline-none text-2xl"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
