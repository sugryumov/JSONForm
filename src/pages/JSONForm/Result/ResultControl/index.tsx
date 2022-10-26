import { FC } from "react";
import { Button } from "../../../../components/Button";
import { IFormButton } from "../../../../interface/IConfig";

import "./index.css";

interface ResultControlProps {
  item: IFormButton;
}

export const ResultControl: FC<ResultControlProps> = ({ item }) => {
  return (
    <div className="result-controls__item">
      <Button onClick={() => {}}>{item.title}</Button>
    </div>
  );
};
