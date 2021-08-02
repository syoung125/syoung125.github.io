import { WHITE } from "../colors";
import { IconProps } from ".";

function CloseIcon({ style, fill = WHITE, onClick }: IconProps) {
  return (
    <svg
      style={{ width: "1.6rem", height: "1.6rem", ...style }}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      onClick={onClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8.707l3.646 3.647.708-.707L8.707 8l3.647-3.646-.707-.708L8 7.293 4.354 3.646l-.707.708L7.293 8l-3.646 3.646.707.708L8 8.707z"
      />
    </svg>
  );
}

export default CloseIcon;
