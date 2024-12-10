import React, { ReactNode, Suspense } from "react";
import ThrowPromise from "./ThrowPromise";

export default function SuspenseSimple(): ReactNode {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThrowPromise />
    </Suspense>
  );
}
