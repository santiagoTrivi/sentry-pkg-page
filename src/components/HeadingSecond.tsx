import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export const HeadingSecond = ({ children }: SectionHeadingProps) => {
  return <h3 className="text-[40px] text-left font-black">{children}</h3>;
};
