import { FC, useState } from "react";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { FIELD_TYPE } from "../constants/fieldType";
import { ResultTitle } from "./ResultTitle";
import { ResultItem } from "./ResultItem";
import { ResultControl } from "./ResultControl";

import "./index.css";

export const Result: FC = () => {
  const { title, items, buttons } = useTypedSelector((state) => state.configReducer);

  const [, setFormValues] = useState<{
    [key: string]: string | boolean;
  }>(
    items?.reduce(
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
      <ResultTitle title={title} />

      <div className="result-items">
        {items?.map((item) => {
          return <ResultItem item={item} key={item.label} handleChangeForm={handleChangeForm} />;
        })}
      </div>

      <div className="result-controls">
        {buttons?.map((item) => {
          return <ResultControl item={item} key={item.title} />;
        })}
      </div>
    </>
  );
};
