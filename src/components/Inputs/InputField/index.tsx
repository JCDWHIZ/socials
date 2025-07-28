import { Input } from "antd";
import type { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  placeholder?: string;
  type: "input" | "password";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: FC<InputProps> = ({
  label,
  placeholder,
  value,
  type,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-[5px] w-full">
      <label
        className={`text-base tracking-[0.16px] text-black dark:text-white ${
          label === "" ? "hidden" : ""
        }`}
      >
        {label}
      </label>
      <Input
        className="rounded-lg border border-[#969696] text-base h-[48px] dark:bg-darkBlack dark:focus:bg-darkBlack dark:text-lightGray outline-white placeholder:text-lightGray w-full"
        placeholder={placeholder}
        defaultValue={value}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
