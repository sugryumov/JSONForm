import { ChangeEvent, FC } from "react";

import "./index.css";

interface TextareaProps {
  onChange: (value: string) => void;
  label?: string;
  cols?: number;
  rows?: number;
  placeholder?: string;
}

export const Textarea: FC<TextareaProps> = ({
  placeholder,
  onChange,
  label,
  cols = 24,
  rows = 10,
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
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        onChange={handleChange}
        className="input"
      />
    </div>
  );
};
