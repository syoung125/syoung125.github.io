import React from "react";

import { WHITE } from "@src/asset/colors";
import { IconProps } from ".";

function ExtensionsIcon({ style, fill = WHITE }: IconProps) {
  return (
    <svg
      style={{ width: "1.4rem", height: "1.4rem", ...style }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"
      />
    </svg>
  );
}

export default React.memo(ExtensionsIcon);
