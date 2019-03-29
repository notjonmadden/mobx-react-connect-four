import React from 'react';
import Game from "../../stores/game";
import WrappedBoard from './Board';
import { inject, observer } from "mobx-react";

interface OuterProps {

}

interface InnerProps {
    game: Game;
}

const Board: React.StatelessComponent<OuterProps> = ({ ...props }) => {
    const { game } = props as InnerProps;

    return <WrappedBoard 
        currentTurn={game.activePlayer} 
        winner={game.winner}
        onResetClick={() => game.clear()}
    />;
};

export default inject('game')(observer(Board));