import React from "react";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <h2 className={`text-3xl font-bold mb-6 ${className || ""}`} {...props}>
      {children}
    </h2>
  );
};

export const Paragraph = ({
  children,
  className,
  ...props
}: TypographyProps) => {
  return (
    <p className={`text-lg leading-relaxed ${className || ""}`} {...props}>
      {children}
    </p>
  );
};
