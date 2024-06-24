import React, { ReactNode, KeyboardEvent } from "react";

export default function EventKey(): ReactNode {
  const handleKey = (e: KeyboardEvent): void => {
    if (e.ctrlKey && e.key === "q") {
      alert("名前は20文字以内で入力してください。");
    }
  };

  return (
    <form>
      <label>
        名前：
        <input type="text" size={20} onKeyDown={handleKey} />
      </label>
    </form>
  );
}
