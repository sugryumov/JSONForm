import { ChangeEvent, FC, useState } from "react";

import "./index.css";

interface CheckboxProps {
  label: string;
  onChange: (value: boolean) => void;
}

export const Checkbox: FC<CheckboxProps> = ({ label, onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(!checked);
    setChecked(!checked);
  };

  return (
    <div className="custom-checkbox">
      {label && (
        <label htmlFor={label} className="label">
          {label}
        </label>
      )}
      <input
        id={label}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
    </div>
  );
};
