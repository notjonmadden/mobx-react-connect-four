import React from 'react';
import { Player, ColumnId, COLUMNS, Optional } from '../../types';
import { observer } from 'mobx-react';
import Column from './components/column';

interface Props {
    currentTurn: Player;
    winner: Optional<Player>;
    onResetClick: () => void;
}

const Board: React.StatelessComponent<Props> = ({ currentTurn, winner, onResetClick }) => (
    <div>
        {
        winner
        ? <h1>{winner} Wins!!!</h1>
        : <h1>{currentTurn}'s Turn!</h1>}
        <div style={{ display: 'flex', justifyContent: 'center' }}> 
            {COLUMNS.map(c => (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '0em .125em' }}>
                    <Column id={c} />
                </div>
            ))}
        </div>
        <button onClick={onResetClick}>Reset</button>
    </div>
);

export default observer(Board);