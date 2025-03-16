import { CellProps, CellValue } from "@/models";
import { memo } from "react";

const Cell = ({ value }: CellProps) => {
  const getClasses = (value: CellValue) =>
    ["border-none", "bg-[#242424]"]
      .concat(
        value
          ? [
              `${value ? (value === "o" ? "bg-[url(/icons/o.svg)]" : "bg-[url(/icons/x.svg)]") : ""}`,
              "bg-[auto_70%]",
              "bg-center",
              "bg-no-repeat",
            ]
          : [],
      )
      .join(" ");

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
      className={getClasses(value)}
      // onClick={handleCellClick}
      // disabled={!!value}
    ></button>
  );
};

export const MemoizedCell = memo(Cell);
