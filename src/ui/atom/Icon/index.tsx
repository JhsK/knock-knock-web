import { HTMLAttributes } from "react";

import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

import { IconNamesType, IconSizeType } from "./config";
import { CursorType, cursorStyles } from "./cursor";

export interface IIconProps extends HTMLAttributes<SVGSVGElement> {
  size?: IconSizeType;
  fill?: string;
  stroke?: string;
  stopPropagation?: boolean;
  preventDefault?: boolean;
  id: IconNamesType;
  cursor?: CursorType;
}

export function Icon({
  size = "default",
  fill = "#000000",
  stroke,
  id,
  stopPropagation,
  preventDefault,
  cursor,
  onClick,
  className,
  ...props
}: IIconProps) {
  return (
    <svg
      className={twMerge(SvgVariants({ size, cursor }), className)}
      style={{ fill, ...props.style }}
      {...props}
      // onClick={onClick}
      onClick={(e) => {
        onClick?.(e);
        preventDefault && e.preventDefault();
        stopPropagation && e.stopPropagation();
      }}
    >
      <use href={`#${id}`} style={{ stroke }} />
    </svg>
  );
}

const SvgVariants = cva("", {
  variants: {
    size: {
      default: "w-[24px] min-w-[24px] h-[24px]",
      xs: "w-[12px] min-w-[12px] h-[12px]",
      sm: "w-[16px] min-w-[16px] h-[16px]",
      md: "w-[20px] min-w-[20px] h-[20px]",
      lg: "w-[28px] min-w-[28px] h-[28px]",
      xl: "w-[32px] min-w-[32px] h-[32px]",
      "2xl": "w-[56px] min-w-[56px] h-[56px]",
      "3xl": "w-[120px] min-w-[120px] h-[120px]",
    },
    cursor: cursorStyles,
  },
});
