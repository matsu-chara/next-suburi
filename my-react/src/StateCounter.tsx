import React, { ReactNode } from "react";

type StateCounterProps = {
  step: number;
  onUpdate: (step: number) => void;
};

export default function StateCounter({
  step,
  onUpdate,
}: StateCounterProps): ReactNode {
  const handleClick = () => onUpdate(step);

  return (
    <button className="cnt" onClick={handleClick}>
      <span>{step}</span>
    </button>
  );
}
