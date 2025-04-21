import { TIMER_COLORS } from "@/constants";

export function getTimerColor(
  timer: number,
  initial: number,
  isWinOrDraw: boolean,
) {
  if (isWinOrDraw)
    return `rgb(${TIMER_COLORS.red[0]}, ${TIMER_COLORS.green[0]}, ${TIMER_COLORS.blue[0]})`;

  const ratio =
    timer >= initial / 2
      ? 1
      : timer <= initial / 6
        ? 0
        : (initial / 2 - timer) / (initial / 2);

  const getColorValue = (
    color: keyof typeof TIMER_COLORS,
    isSubtraction = true,
  ) => {
    return timer >= initial / 2
      ? TIMER_COLORS[color][0]
      : timer <= initial / 6
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
