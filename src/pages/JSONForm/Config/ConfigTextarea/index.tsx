import { FC } from "react";
import { Textarea } from "../../../../components/Textarea";

import "./index.css";

interface ConfigTextareaProps {
  configValue: string;
  handleChange: (values: string) => void;
  invalidConfig: string;
}

export const ConfigTextarea: FC<ConfigTextareaProps> = ({
  configValue,
  handleChange,
  invalidConfig,
}) => (
  <div className="config-field">
    <Textarea
      value={configValue}
      onChange={handleChange}
      className={
        invalidConfig ? "config-field__textarea config-field__error" : "config-field__textarea"
      }
    />

    {invalidConfig && <p className="config-field__error-text">{invalidConfig}</p>}
  </div>
);
