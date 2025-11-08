import React from "react";

interface NativeOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {
  children: React.ReactNode;
}

export const NativeOption = ({ children, ...props }: NativeOptionProps) => {
  return <option {...props}>{children}</option>;
};

export default NativeOption;
