import { FC } from "react";
import { ITabs } from "../../interface/ITabs";

import "./index.css";

type TabsProps = {
  tabs: ITabs<{ id: number }>[];
  activeTab: number;
  onClick: (index: number) => void;
};

export const Tabs: FC<TabsProps> = ({ tabs = [], activeTab = 1, onClick }) => {
  const TabContent = tabs?.find(({ id }) => activeTab === id);

  const handleTab = (id: number) => () => onClick(id);

  return (
    <>
      <div className="tabs">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            onClick={handleTab(id)}
            className={activeTab === id ? "tabs__button tabs__button-active" : "tabs__button"}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="tab__content">{TabContent && <TabContent.Component id={activeTab} />}</div>
    </>
  );
};
