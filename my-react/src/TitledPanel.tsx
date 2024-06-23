import React, { ReactNode } from "react";

type TitledPanelProps = {
  title: ReactNode;
  body: ReactNode;
};

export default function TitledPanel({
  title,
  body,
}: TitledPanelProps): ReactNode {
  return (
    <div
      style={{
        margin: 50,
        padding: 20,
        border: "1px solid #000",
        width: "fit-content",
        boxShadow: "10px 5px 5px #999",
        backgroundColor: "#fff",
      }}
    >
      {title}
      <hr />
      {body}
    </div>
  );
}
