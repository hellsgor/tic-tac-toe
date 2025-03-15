import { CellProps, CellValue } from "@/models";
import { memo } from "react";

const Cell = ({ value }: CellProps) => {
  const getMod = (value: CellValue) =>
    value
      ? ` ${[
          `${value ? (value === "o" ? "bg-[url(/icons/o.svg)]" : "bg-[url(/icons/x.svg)]") : ""}`,
          "bg-[auto_70%]",
          "bg-center",
          "bg-no-repeat",
        ]
          .join(" ")
          .trim()}`
      : "";

  // const dispatch = useAppDispatch();

  // const handleCellClick = () => {
  //   if (value) return;

  //   dispatch((dispatch, getState) => {
  //     dispatch(setSymbol({ index, symbol: getState().info.currentPlayer }));
  //     dispatch(setCurrentPlayer());
  //     dispatch(incrementMove());
  //   });
  // };

  return (
    <button
      className={`border-none bg-[#242424]${getMod(value)}`}
      // onClick={handleCellClick}
      // disabled={!!value}
    ></button>
  );
};

export const MemoizedCell = memo(Cell);
