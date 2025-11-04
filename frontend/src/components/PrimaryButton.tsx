import classNames from "classnames";
import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
};

type AnchorProps = BaseProps & {
  as?: "a";
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = BaseProps & {
  as: "button";
} & ButtonHTMLAttributes<HTMLButtonElement>;

type PrimaryButtonProps = AnchorProps | ButtonProps;

export function PrimaryButton(props: PrimaryButtonProps) {
  const {
    children,
    className,
    variant = "primary",
    as = "a",
    ...rest
  } = props as AnchorProps & ButtonProps;

  const baseClasses = classNames(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] transition",
    variant === "primary"
      ? "bg-gold text-ebony hover:bg-champagne"
      : "border border-champagne text-champagne hover:bg-champagne hover:text-ebony",
    className
  );

  if (as === "button") {
    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={baseClasses} {...buttonProps}>
        {children}
      </button>
    );
  }

  const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
  return (
    <a className={baseClasses} {...anchorProps}>
      {children}
    </a>
  );
}
