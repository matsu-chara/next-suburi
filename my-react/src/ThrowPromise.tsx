import React, { ReactElement } from "react";

let flag = false;

export default function ThrowPromise(): ReactElement {
  if (flag) {
    return <p>正しく表示できました。</p>;
  }

  throw new Promise((resolve) => {
    setTimeout(() => {
      flag = true;
      resolve("success!");
    }, 2000);
  });
}
