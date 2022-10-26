import { Config } from "../Config";
import { ITabs } from "../../../interface/ITabs";
import { Result } from "../Result";

export const TABS: ITabs[] = [
  {
    id: 1,
    label: "Config",
    Component: Config,
  },
  {
    id: 2,
    label: "Result",
    Component: Result,
  },
];
