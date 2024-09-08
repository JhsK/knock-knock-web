import { HTMLAttributes } from "react";

import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { TextVariantsType, defaultVariantsTag } from "./config";

interface ITextProps extends Omit<HTMLAttributes<HTMLElement>, "color"> {
  variant: TextVariantsType;
  weight?: "regular" | "medium" | "semi-bold" | "bold";
}

export const Text = ({
  variant,
  weight,
  //   color,
  children,
  className,
  ...props
}: ITextProps) => {
  const DynamicTag = defaultVariantsTag[variant || "body-1"];

  return (
    <DynamicTag
      className={cn(
        TextVariants({
          variant,
          //   color,
        }),
        className
      )}
      {...props}
    >
      {children}
    </DynamicTag>
  );
};

const TextVariants = cva("", {
  variants: {
    variant: {
      "display-1": "text-display-1",
      "display-2": "text-display-2",
      "title-1": "text-title-1",
      "title-2": "text-title-2",
      "title-3": "text-title-3",
      "heading-1": "text-heading-1",
      "heading-2": "text-heading-2",
      "headline-1": "text-headline-1",
      "headline-2": "text-headline-2",
      "body-1": "text-body-1",
      "body-2": "text-body-2",
      "label-1": "text-label-1",
      "label-2": "text-label-2",
      "caption-1": "text-caption-1",
      "caption-2": "text-caption-2",
      "caption-3": "text-caption-3",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      "semi-bold": "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    variant: "body-1",
    weight: "regular",
  },
});
