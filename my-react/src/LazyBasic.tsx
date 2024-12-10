import React, { ReactElement, Suspense, lazy } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const LazyButton = lazy(() => sleep(2000).then(() => import("./LazyButton")));

export default function LazyBasic(): ReactElement {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <LazyButton />
    </Suspense>
  );
}
