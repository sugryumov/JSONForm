import { ChangeEvent, FC, useState } from "react";
import { Button } from "../../../components/Button";
import { prepareJSON } from "../../../helpers/prepareJSON";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Intro } from "./Intro";

import "./index.css";

export const Config: FC = () => {
  const { setConfig, setActiveTab } = useActions();
  const { configReducer } = useTypedSelector((state) => state);

  const [invalidConfig, setInvalidConfig] = useState<string>("");

  const [configValue, setConfigValue] = useState<string>(prepareJSON(configReducer));

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setConfigValue(e.target.value);
  };

  const handleFormat = () => {
    try {
      setConfigValue(prepareJSON(JSON.parse(configValue)));
      setInvalidConfig("");
    } catch (err: any) {
      setInvalidConfig(err.message);
    }
  };

  const handleApply = () => {
    try {
      setConfig(JSON.parse(configValue));
      setActiveTab(2);
      setInvalidConfig("");
    } catch (err: any) {
      setInvalidConfig(err.message);
    }
  };

  return (
    <div className="config">
      <Intro />

      <div className="config__inner">
        <textarea
          value={configValue}
          onChange={handleChange}
          className={invalidConfig ? "config__textarea config__textarea-error" : "config__textarea"}
        />

        {invalidConfig && <p className="config__textarea-error-text">{invalidConfig}</p>}
      </div>

      <div className="config__button">
        <Button onClick={handleFormat}>Format</Button>
        <Button onClick={handleApply}>Apply</Button>
      </div>
    </div>
  );
};
