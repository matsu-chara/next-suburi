import React, { ReactNode } from "react";
import { Book } from "./ForItem";

type ListTemplateProps = {
  src: Book[];
  children: (elem: Book) => ReactNode;
};

export default function ListTemplate({
  src,
  children,
}: ListTemplateProps): ReactNode {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>{children(elem)}</React.Fragment>
      ))}
    </dl>
  );
}
