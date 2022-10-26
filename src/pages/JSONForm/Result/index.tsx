import { FC, useState } from "react";
import { FIELD_TYPE } from "../constants/fieldType";
import { ResultTitle } from "./ResultTitle";
import { ResultItem } from "./ResultItem";
import { ResultControl } from "./ResultControl";
import { initialValue } from "../../data";

import "./index.css";

export const Result: FC = () => {
  const [, setFormValues] = useState<{
    [key: string]: string | boolean;
  }>(
    initialValue.items.reduce(
      (acc, cur) => ({
        ...acc,
        [cur.name]: cur.type === FIELD_TYPE.CHECKBOX ? false : "",
      }),
      {}
    )
  );

  const handleChangeForm = (field: string) => (value: string | boolean) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <ResultTitle title={initialValue.title} />

      <div className="result-items">
        {initialValue.items.map((item) => {
          return (
            <ResultItem
              item={item}
              key={item.label}
              handleChangeForm={handleChangeForm}
            />
          );
        })}
      </div>

      <div className="result-controls">
        {initialValue.constrols.map((item) => {
          return <ResultControl item={item} key={item.title} />;
        })}
      </div>
    </>
  );
};
