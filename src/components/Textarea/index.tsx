import { ChangeEvent, FC } from "react";

import "./index.css";

interface TextareaProps {
  onChange: (value: string) => void;
  value?: string;
  label?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
  className?: string;
}

export const Textarea: FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  label,
  cols = 24,
  rows = 10,
  className,
}) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="custom-textarea">
      {label && (
        <label htmlFor={label} className="label">
          {label}
        </label>
      )}
      <textarea
        id={label}
        value={value}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        onChange={handleChange}
        className={className ? className : "input custom-textarea__input"}
      />
    </div>
  );
};
