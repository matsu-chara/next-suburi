import React, { ReactNode } from "react";
import ForItem, { Book } from "./ForItem";

type ForNestProps = {
  src: Book[];
};

export default function ForNest({ src }: ForNestProps): ReactNode {
  return (
    <dl>
      {src.map((elem) => (
        <ForItem book={elem} key={elem.isbn} />
      ))}
    </dl>
  );
}
