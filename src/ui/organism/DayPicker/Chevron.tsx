import { cn } from "@/lib/utils";
import { Icon } from "@/ui/atom/Icon";

interface IDayPickerChevronProps {
  className?: string;
  disabled?: boolean;
  orientation?: "up" | "down" | "left" | "right";
  size?: number;
}

function DayPickerChevron({
  className,
  disabled,
  orientation,
  size,
}: IDayPickerChevronProps) {
  return (
    <div className={cn("w-full flex items-center justify-between", className)}>
      {orientation === "left" ? (
        <Icon id="chevronLeft" size="md" fill="#182230" />
      ) : (
        <Icon id="chevronRight" size="md" fill="#182230" />
      )}
    </div>
  );
}

export default DayPickerChevron;
