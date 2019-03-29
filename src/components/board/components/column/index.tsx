import { ColumnId } from "../../../../types";
import Game from "../../../../stores/game";
import React from 'react';
import WrappedColumn from './Column';
import { observer, inject } from "mobx-react";
import UiState from "../../../../stores/ui";

interface OuterProps {
    id: ColumnId;
}

interface InnerProps extends OuterProps {
    game: Game;
    ui: UiState;
}

const Column: React.StatelessComponent<OuterProps> = ({ id, ...props }) => {
    const { game, ui } = props as InnerProps;
    const column = game.getColumn(id);

    return <WrappedColumn 
        pieces={column.stack} 
        potentialMove={ui.potentialMove === id ? game.activePlayer : null}
        gameOver={game.winner !== null}
        onClick={() => game.makeMove(id)}
        onMouseOver={() => ui.potentialMove = id}
    />;
};

export default inject('game', 'ui')(observer(Column));