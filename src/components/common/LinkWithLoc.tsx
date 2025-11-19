"use client";
import { Link } from "@tanstack/react-router";
import React, { ComponentProps } from "react";

export type LinkWithLocProps = ComponentProps<typeof Link>;

const LinkWithLoc: React.FC<LinkWithLocProps> = ({
  href,
  children,
  ...props
}) => {
  return (
    <Link to={`/${href}`} {...props}>
      {children}
    </Link>
  );
};

export default LinkWithLoc;
