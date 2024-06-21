import React, { ReactNode } from "react";

type MyHelloProps = {
  myName: string;
  myNum: number;
};

export default function MyHello(props: MyHelloProps): ReactNode {
  return <div>hello {props.myName} {props.myNum}!</div>;
}
