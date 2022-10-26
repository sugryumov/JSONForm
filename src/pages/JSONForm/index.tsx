import { FC, useState } from "react";
import { Tabs } from "../../components/Tabs";
import { TABS } from "./constants/tabs";

export const JSONForm: FC = () => {
  const [activeTab, setActiveTab] = useState<number>(TABS[0].id);

  return <Tabs activeTab={activeTab} onClick={setActiveTab} tabs={TABS} />;
};
