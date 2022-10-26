import { FC } from "react";
import { Button } from "../../../../components/Button";
import { IFormControl } from "../../../../interface/IConfig";

import "./index.css";

interface ResultControlProps {
  item: IFormControl;
}

export const ResultControl: FC<ResultControlProps> = ({ item }) => {
  return (
    <div className="result-controls__item">
      <Button onClick={() => {}}>{item.title}</Button>
    </div>
  );
};
