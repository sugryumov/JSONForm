import { ChangeEvent, FC, useState } from "react";
import { Button } from "../../../components/Button";
import { initialValue } from "../../data";

import "./index.css";

export const Config: FC = () => {
  const [value, setValue] = useState<string>(JSON.stringify(initialValue, null, 4));

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleFormat = () => {
    setValue(JSON.stringify(JSON.parse(value), null, 4));
  };

  const handleApply = () => {};

  return (
    <div className="config">
      <textarea value={value} onChange={handleChange} className="config__textarea" />

      <div className="config__button">
        <Button onClick={handleFormat}>Format</Button>
        <Button onClick={handleApply}>Apply</Button>
      </div>
    </div>
  );
};
