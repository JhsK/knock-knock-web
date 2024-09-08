import { ElementType } from "react";
import config from "../../../../tailwind.config";

export type TextVariantsType = keyof typeof config.theme.fontSize;

export const defaultVariantsTag: Record<TextVariantsType, ElementType> = {
  "display-1": "h1",
  "display-2": "h2",
  "title-1": "h3",
  "title-2": "h4",
  "title-3": "h5",
  "heading-1": "h6",
  "heading-2": "h6",
  "headline-1": "p",
  "headline-2": "p",
  "body-1": "p",
  "body-2": "p",
  "label-1": "label",
  "label-2": "label",
  "caption-1": "small",
  "caption-2": "small",
  "caption-3": "small",
};
