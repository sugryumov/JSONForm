import { createSlice } from "@reduxjs/toolkit";
import { IFormData } from "../../interface/IConfig";

const initialState: IFormData = {
  title: "Form to JSON",
  items: [
    {
      name: "text",
      label: "Input text",
      type: "text",
    },
    {
      name: "password",
      label: "Input password",
      type: "password",
    },
    {
      name: "number",
      label: "Input number",
      type: "number",
    },
    {
      name: "textarea",
      label: "Textarea",
      type: "textarea",
    },
    {
      name: "date",
      label: "Input date",
      type: "date",
    },
    {
      name: "checkbox",
      label: "Checkbox",
      type: "checkbox",
    },
    {
      name: "radio",
      label: "Radio",
      type: "radio",
      options: [
        { id: "one", name: "radio", value: "one" },
        { id: "two", name: "radio", value: "two" },
        { id: "three", name: "radio", value: "three" },
      ],
    },
  ],
  buttons: [{ title: "Apply" }, { title: "Ok" }, { title: "Cancel" }],
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
