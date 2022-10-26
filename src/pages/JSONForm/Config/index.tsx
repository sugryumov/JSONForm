import { FC, useState } from "react";
import { Button } from "../../../components/Button";
import { prepareJSON } from "../../../helpers/prepareJSON";
import { getErrorMessage } from "../../../helpers/getErrorMessage";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { ConfigTextarea } from "./ConfigTextarea";
import { ConfigIntro } from "./ConfigIntro";

import "./index.css";

export const Config: FC = () => {
  const { setConfig, setActiveTab } = useActions();
  const { configReducer } = useTypedSelector((state) => state);

  const [invalidConfig, setInvalidConfig] = useState<string>("");

  const [configValue, setConfigValue] = useState<string>(prepareJSON(configReducer));

  const handleChange = (value: string) => {
    setConfigValue(value);
  };

  const handleFormat = () => {
    try {
      setConfigValue(prepareJSON(JSON.parse(configValue)));
      setInvalidConfig("");
    } catch (err) {
      setInvalidConfig(getErrorMessage(err));
    }
  };

  const handleApply = () => {
    try {
      setConfig(JSON.parse(configValue));
      setActiveTab(2);
      setInvalidConfig("");
    } catch (err) {
      setInvalidConfig(getErrorMessage(err));
    }
  };

  return (
    <div className="config">
      <ConfigIntro />

      <ConfigTextarea
        handleChange={handleChange}
        configValue={configValue}
        invalidConfig={invalidConfig}
      />

      <div className="config__button">
        <Button onClick={handleFormat}>Format</Button>
        <Button onClick={handleApply}>Apply</Button>
      </div>
    </div>
  );
};
