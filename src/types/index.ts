export type Player
    = 'Red'
    | 'Black';

export type Optional<T>
    = T | null;

export type ColumnId
    = 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J';

export const BOARD_HEIGHT
    = 8;

export const COLUMNS: ReadonlyArray<ColumnId> = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
]