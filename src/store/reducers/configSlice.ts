import { createSlice } from "@reduxjs/toolkit";
import { IFormData } from "../../interface/IConfig";

const initialState: IFormData = {
  title: "Test form",
  items: [
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      name: "age",
      label: "Age",
      type: "number",
    },
    {
      name: "question",
      label: "Question",
      type: "textarea",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
    },
    {
      name: "agree",
      label: "Agree",
      type: "checkbox",
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { id: "man", name: "gender", value: "M" },
        { id: "woman", name: "gender", value: "W" },
      ],
    },
  ],
  controls: [{ title: "Apply" }, { title: "Ok" }, { title: "Cancel" }],
};

const configSlice = createSlice({
  name: "config",
  initialState,
  reducers: {
    setConfig: (_, { payload }) => payload,
  },
});

export const configActions = configSlice.actions;
export default configSlice.reducer;
