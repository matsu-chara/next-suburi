import React, { ReactNode } from "react";
import cn from "classnames";

type SelectStyleProps = {
  mode: string;
};

export default function SelectStyle({ mode }: SelectStyleProps): ReactNode {
  return (
    <>
      <div className={cn("box", mode === "light" ? "light" : "dark")}>
        hello world1.
      </div>
      <div
        className={cn("box", {
          light: mode === "light",
          dark: mode === "dark",
        })}
      >
        hello world2.
      </div>
      <div
        className={cn("box", [
          "panel",
          {
            light: mode === "light",
            dark: mode === "dark",
          },
        ])}
      >
        hello world3.
      </div>
    </>
  );
}
