import { PropsWithChildren } from "react";
import classNames from "classnames";

type ContainerProps = PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={classNames("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
