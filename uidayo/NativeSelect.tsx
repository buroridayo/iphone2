import * as React from "react";

//親コンポーネントが NativeSelect に渡した $\text{ref}$ オブジェクトが、コンポーネントの内部にある <select> という $\text{DOM}$ 要素に直接アタッチ
interface NativeSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactNode;
}

export const NativeSelect = React.forwardRef<
  HTMLSelectElement,
  NativeSelectProps
>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
      className={`border border-gray-300 rounded-md px-3 py-2 bg-white text-black focus:outline-none focus:ring-5 focus:ring-blue-800 ${className} `}
      {...props}
    >
      {children}
    </select>
  );
});
//error name
NativeSelect.displayName = "NativeSelect";
export default NativeSelect;
