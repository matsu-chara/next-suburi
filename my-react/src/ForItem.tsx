import React, { ReactNode } from "react";

export type Book = {
  isbn: string;
  title: string;
};

type ForItemProps = {
  book: Book;
};

export default function ForItem({ book }: ForItemProps): ReactNode {
  return (
    <>
      <dt>{book.title}</dt>
    </>
  );
}
