export interface FieldProps {
  cells: CellValue[];
}

export interface CellProps {
  value: CellValue;
}

export type CellValue = 'X' | 'O' | null;
