import { ChangeEvent, FC } from "react";
import { IRadioOption } from "../../interface/IConfig";

import "./index.css";

interface RadioProps {
  value?: string;
  label: string;
  options: IRadioOption[];
  onChange: (value: string) => void;
}

export const Radio: FC<RadioProps> = ({ value, label, options, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className="custom-radio">
      <span className="label">{label}</span>

      <div className="custom-radio__list">
        {options?.map(({ id, value, name }) => {
          return (
            <div key={id} className="custom-radio__item">
              <input id={id} name={name} type="radio" value={value} onChange={handleChange} />
              <label htmlFor={id} className="custom-radio__label">
                {value}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
