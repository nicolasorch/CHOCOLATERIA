import classNames from "classnames";
import { PropsWithChildren } from "react";

type SectionHeadingProps = PropsWithChildren<{
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  description?: string;
  className?: string;
}>;

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={classNames(
        "space-y-4",
        align === "center" ? "mx-auto text-center max-w-3xl" : "max-w-2xl",
        className
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.4em] text-gold">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl font-semibold leading-snug text-champagne sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-base text-champagne/80">{description}</p>}
      {children}
    </div>
  );
}
