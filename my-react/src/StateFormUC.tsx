import React, { ReactNode, useRef } from "react";

export default function StateFormUC(): ReactNode {
  const name = useRef<HTMLInputElement>(null);
  const age = useRef<HTMLInputElement>(null);

  const show = () => {
    console.log(
      `こんにちは ${name.current?.value} ${age?.current?.value} さん`,
    );
  };

  return (
    <form>
      <div>
        <label htmlFor="name">名前: </label>
        <input
          id="name"
          name="name"
          type="text"
          ref={name}
          defaultValue="佐藤"
        />
      </div>
      <div>
        <label htmlFor="age">年齢: </label>
        <input id="age" name="age" type="text" ref={age} defaultValue={1} />
      </div>
      <div>
        <button type="button" onClick={show}>
          送信
        </button>
      </div>
      <p>
        こんにちは {name.current?.value} ({age.current?.value})さん
      </p>
    </form>
  );
}
