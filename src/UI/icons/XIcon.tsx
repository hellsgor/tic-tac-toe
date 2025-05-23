import { memo } from "react";

const XIcon = memo(({ size }: { size?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || "100%"}
      height={size || "100%"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9400d3"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
});

XIcon.displayName = "XIcon";

export default XIcon;
