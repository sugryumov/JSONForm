export type InputType = "text" | "password" | "number" | "textarea" | "checkbox" | "date" | "radio";

export interface IRadioOption {
  id: string;
  name: string;
  value: string;
}

export interface IFormItem {
  name: string;
  label: string;
  type: InputType;
  options?: IRadioOption[];
}

export interface IFormButton {
  title: string;
}

export interface IFormData {
  title: string;
  items: IFormItem[];
  buttons: IFormButton[];
}
