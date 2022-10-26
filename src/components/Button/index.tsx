import { FC, ReactNode } from "react";

import "./index.css";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};
