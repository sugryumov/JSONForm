import { FC } from "react";

import "./index.css";

interface ResultTitleProps {
  title: string;
}

export const ResultTitle: FC<ResultTitleProps> = ({ title }) => {
  return <h1 className="result-title">{title}</h1>;
};
