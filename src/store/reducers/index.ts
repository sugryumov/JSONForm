import configReducer, { configActions } from "./configSlice";
import tabReducer, { tabsActions } from "./tabSlice";

export const reducers = {
  configReducer,
  tabReducer,
};

export const actions = {
  ...configActions,
  ...tabsActions,
};
