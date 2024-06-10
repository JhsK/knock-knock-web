import defaultDayjs from "dayjs";
import "dayjs/locale/ko";
import isToday from "dayjs/plugin/isToday";

defaultDayjs.locale("ko");
defaultDayjs.extend(isToday);

export const dayjs = (value?: string | Date) => {
  return defaultDayjs(value);
};
