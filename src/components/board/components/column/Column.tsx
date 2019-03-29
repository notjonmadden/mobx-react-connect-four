import React from 'react';
import { ColumnId, Player, Optional, BOARD_HEIGHT } from '../../../../types';
import { observer } from 'mobx-react';
import { range } from 'lodash';
import Cell from './components/Cell';
import Piece from './components/Piece';
import { PIECE_DIAMETER } from './components/Piece/Piece';

interface Props {
    potentialMove: Optional<Player>;
    pieces: ReadonlyArray<Player>;
    gameOver: boolean;
    onClick: () => void;
    onMouseOver: () => void;
}

function fillPieces(pieces: ReadonlyArray<Player>): ReadonlyArray<Optional<Player>> {
    const countMissingPieces = BOARD_HEIGHT - pieces.length;
    const missingPieces = range(countMissingPieces).map(() => null);
    return [...pieces, ...missingPieces].reverse();
}

const columnStyle: React.CSSProperties = { display: 'flex', flexDirection: 'column' };
const Column: React.StatelessComponent<Props> = ({ potentialMove, pieces, gameOver, onClick, onMouseOver }) => (
    <div onClick={gameOver ? undefined : onClick} onMouseEnter={onMouseOver} style={columnStyle}>
        <div style={{ display: 'flex', justifyContent: 'center', height: PIECE_DIAMETER + 2 }}>
            {potentialMove && !gameOver ? <Piece player={potentialMove} /> : null}
        </div>
        {fillPieces(pieces).map(p => (
            <div style={{ margin: '.125em 0em' }}>
                <Cell piece={p} />
            </div>
        ))}
    </div>
);

export default observer(Column);