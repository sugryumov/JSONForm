import { FC } from "react";
import { prepareJSON } from "../../../../helpers/prepareJSON";

import "./index.css";

export const Intro: FC = () => {
  return (
    <>
      <h2 className="config__title">Генерация форм по JSON конфигурации</h2>

      <details className="intro">
        <summary className="intro__summary">Формат json-a</summary>
        <pre>
          {prepareJSON({
            title: "string",
            items: [
              {
                name: "string",
                label: "string",
                type: "text | password | number | textarea | date | checkbox | radio",
              },
              {
                name: "string",
                label: "string",
                type: "radio",
                options: [
                  {
                    id: "string",
                    name: "string (equal to parent)",
                    value: "string",
                  },
                ],
              },
            ],
            buttons: [{ title: "string" }],
          })}
        </pre>
      </details>
    </>
  );
};
