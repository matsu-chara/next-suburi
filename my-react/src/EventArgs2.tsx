import React, { ReactNode, MouseEvent } from "react";

export default function EventArgs(): ReactNode {
  const current = (e: MouseEvent<HTMLButtonElement>): void => {
    const d = new Date();
    const type = e.currentTarget.dataset["type"];
    switch (type) {
      case "date":
        console.log(`${e.currentTarget.id}: ${d.toLocaleDateString()}`);
        break;
      case "time":
        console.log(`${e.currentTarget.id}: ${d.toLocaleTimeString()}`);
        break;
      case "datetime":
        console.log(`${e.currentTarget.id}: ${d.toLocaleTimeString()}`);
        break;
      default:
        console.log(`${e.currentTarget.id}: unknown type(${type})`);
        break;
    }
  };

  return (
    <div>
      <button id="dt" data-type="datetime" onClick={current}>
        現在日時
      </button>
      <button id="dt" data-type="date" onClick={current}>
        現在日付
      </button>
      <button id="dt" data-type="time" onClick={current}>
        現在時刻
      </button>
    </div>
  );
}
