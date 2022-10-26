import { IFormData } from "../interface/IConfig";

export const initialValue: IFormData = {
  title: "Form",
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
      name: "gender2",
      label: "Gender2",
      type: "radio",
      options: [
        { id: "man2", name: "gender2", value: "M" },
        { id: "woman2", name: "gender2", value: "W" },
      ],
    },
    {
      name: "agree",
      label: "Agree",
      type: "checkbox",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
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
  constrols: [{ title: "Apply" }, { title: "Ok" }, { title: "Cancel" }],
};
