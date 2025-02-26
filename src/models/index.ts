export interface CellProps {
  value: CellValue;
  index: number;
}

export type CellValueSymbs = 'x' | 'o';

export type CellValue = CellValueSymbs | null;

export interface InfoData {
  currentPlayer: CellValueSymbs;
  move: number;
}

export interface CellPayload {
  index: number;
  symbol: CellValueSymbs;
}
