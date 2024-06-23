import React, { ReactNode, useState } from "react";

export type StateBasicProps = {
  init: number;
};

export default function StateBasic({ init }: StateBasicProps): ReactNode {
  const [count, setCount] = useState(init);
  console.log(`count is ${count}`);
  const handleClick = () => setCount(count => count + 1);
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回クリックされました。</p>
    </>
  );
}
