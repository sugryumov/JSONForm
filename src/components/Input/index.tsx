import { ChangeEvent, FC, HTMLInputTypeAttribute } from "react";

import "./index.css";

interface InputProps {
  type: HTMLInputTypeAttribute;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
}

export const Input: FC<InputProps> = ({
  type,
  placeholder,
  onChange,
  label,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="custom-input">
      {label && (
        <label htmlFor={label} className="label">
          {label}
        </label>
      )}
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};
