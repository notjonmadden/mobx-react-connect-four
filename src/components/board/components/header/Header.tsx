import React from 'react';
import { Optional, Player } from '../../../../types';
import { observer } from 'mobx-react';

interface Props {
    currentTurn: Player;
    winner: Optional<Player>;
    onResetClick: () => void;
}

const Header: React.StatelessComponent<Props> = ({ currentTurn, winner, onResetClick }) => (
    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
        <h1>{winner ? `${winner} Wins!!!` : `${currentTurn}'s Turn`}</h1>
        <button onClick={onResetClick}>Reset</button>
    </div>
);

export default observer(Header);