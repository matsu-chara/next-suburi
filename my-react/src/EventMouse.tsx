import React, { ReactNode, useState } from "react";

type EventMouseProps = {
  beforeSrc: string;
  afterSrc: string;
  errorSrc: string;
  alt: string;
};

export default function EventMouse({
  beforeSrc,
  afterSrc,
  errorSrc,
  alt,
}: EventMouseProps): ReactNode {
  const [current, setCurrent] = useState(beforeSrc);
  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);
  const handleError = () => setCurrent(errorSrc);

  return (
    <img
      src={current}
      alt={alt}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onError={handleError}
    />
  );
}
