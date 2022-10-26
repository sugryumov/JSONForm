import { FC } from "react";
import { Checkbox } from "../../../../components/Checkbox";
import { Input } from "../../../../components/Input";
import { Radio } from "../../../../components/Radio";
import { Textarea } from "../../../../components/Textarea";
import { FIELD_TYPE } from "../../constants/fieldType";
import { IFormItem } from "../../../../interface/IConfig";

import "./index.css";

interface ResultItemProps {
  item: IFormItem;
  handleChangeForm: (field: string) => (value: string | boolean) => void;
}

export const ResultItem: FC<ResultItemProps> = ({ item, handleChangeForm }) => {
  const { name, label, type, options } = item;

  if (item.type === FIELD_TYPE.RADIO) {
    return (
      <div className="result-items__item">
        <Radio
          label={label}
          options={options!}
          onChange={handleChangeForm(name)}
        />
      </div>
    );
  }

  if (item.type === FIELD_TYPE.TEXTAREA) {
    return (
      <div className="result-items__item">
        <Textarea label={label} onChange={handleChangeForm(name)} />
      </div>
    );
  }

  if (item.type === FIELD_TYPE.CHECKBOX) {
    return (
      <div className="result-items__item">
        <Checkbox label={label} onChange={handleChangeForm(name)} />
      </div>
    );
  }

  return (
    <div className="result-items__item">
      <Input type={type} label={label} onChange={handleChangeForm(name)} />
    </div>
  );
};
