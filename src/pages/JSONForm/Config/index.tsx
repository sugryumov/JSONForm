import { ChangeEvent, FC, useState } from "react";
import { Button } from "../../../components/Button";
import { prepareJSON } from "../../../helpers/prepareJSON";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

import "./index.css";

export const Config: FC = () => {
  const { setConfig, setActiveTab } = useActions();
  const { configReducer } = useTypedSelector((state) => state);

  const [configValue, setConfigValue] = useState<string>(prepareJSON(configReducer));

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setConfigValue(e.target.value);
  };

  const handleFormat = () => {
    setConfigValue(prepareJSON(JSON.parse(configValue)));
  };

  const handleApply = () => {
    setConfig(JSON.parse(configValue));
    setActiveTab(2);
  };

  return (
    <div className="config">
      <textarea value={configValue} onChange={handleChange} className="config__textarea" />

      <div className="config__button">
        <Button onClick={handleFormat}>Format</Button>
        <Button onClick={handleApply}>Apply</Button>
      </div>
    </div>
  );
};
