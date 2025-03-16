export interface CellProps {
  value: CellValue;
  index: number;
  win: boolean;
}

export type CellValueSymbols = "x" | "o";

export type CellValue = CellValueSymbols | null;

export interface CellPayload {
  index: number;
  symbol: CellValueSymbols;
}
