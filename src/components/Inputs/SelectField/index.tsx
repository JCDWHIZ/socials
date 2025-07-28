import React, { FC } from "react";
import { Select } from "antd";
import type { SelectProps } from "antd";

interface SelectDropdownProps extends SelectProps {
  label?: string;
  value: string | number;
}

const SelectDropdown: FC<SelectDropdownProps> = ({
  label,
  options,
  value,
  placeholder,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-[5px]">
      {label && <label className="text-base tracking-[0.16px]">{label}</label>}
      <Select
        {...props}
        variant="borderless"
        allowClear
        defaultValue={value}
        options={options}
        className="rounded-lg border border-[#969696] bg-[#F8FAFC] text-base h-[48px]"
        popupClassName="!bg-[#F8FAFC] !rounded-lg border-0"
        placeholder={placeholder}
      />
    </div>
  );
};

export default SelectDropdown;
