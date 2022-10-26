import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  activeTab: 1,
};

const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setActiveTab: (state, { payload }) => {
      state.activeTab = payload;
    },
  },
});

export const tabsActions = tabSlice.actions;
export default tabSlice.reducer;
