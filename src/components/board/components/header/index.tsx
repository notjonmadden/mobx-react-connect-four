import React from 'react';
import Header from './Header';
import Game from '../../../../stores/game';
import { inject, observer } from 'mobx-react';

interface ExposedProps {
    
}

interface InnerProps extends ExposedProps {
    game: Game;
}

const Wrapper: React.StatelessComponent<ExposedProps> = (props) => {
    const { game } = props as InnerProps;
    const { activePlayer, winner } = game;
    return <Header 
        currentTurn={activePlayer} 
        winner={winner}
        onResetClick={() => game.clear()}
    />
};

export default inject('game')(observer(Wrapper));