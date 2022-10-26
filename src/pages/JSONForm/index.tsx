import { FC } from "react";
import { Tabs } from "../../components/Tabs";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { TABS } from "./constants/tabs";

export const JSONForm: FC = () => {
  const { activeTab } = useTypedSelector((state) => state.tabReducer);
  const { setActiveTab } = useActions();

  return <Tabs activeTab={activeTab} onClick={setActiveTab} tabs={TABS} />;
};
