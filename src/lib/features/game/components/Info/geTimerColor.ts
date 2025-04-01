import { TIMER_COLORS } from "@/constants";

export function getTimerColor(timer: number, isWinOrDraw: boolean) {
  if (isWinOrDraw)
    return `rgb(${TIMER_COLORS.red[0]}, ${TIMER_COLORS.green[0]}, ${TIMER_COLORS.blue[0]})`;

  const ratio = timer >= 30 ? 1 : timer <= 10 ? 0 : (30 - timer) / 30;

  const getColorValue = (
    color: keyof typeof TIMER_COLORS,
    isSubtraction = true,
  ) => {
    return timer >= 30
      ? TIMER_COLORS[color][0]
      : timer <= 10
        ? TIMER_COLORS[color][1]
        : Math.round(
            TIMER_COLORS[color][0] * (isSubtraction ? 1 - ratio : 1 + ratio),
          );
  };

  const red = getColorValue("red", false);
  const green = getColorValue("green");
  const blue = getColorValue("blue");

  return `rgb(${red}, ${green}, ${blue})`;
}
