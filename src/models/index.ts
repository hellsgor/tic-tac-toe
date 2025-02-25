export interface CellProps {
  value: CellValue;
  index: number;
}

export type CellValue = 'X' | 'O' | null;
