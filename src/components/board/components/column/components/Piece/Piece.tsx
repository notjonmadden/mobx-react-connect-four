import React from 'react';
import { Player, Optional } from '../../../../../../types';
import { observer } from 'mobx-react';

interface Props {
    player: Optional<Player>;
}

const PIECE_DIAMETER = 24;
const Piece: React.StatelessComponent<Props> = ({ player }) =>
    <div
        style={{
            borderRadius: '50%',
            background: player || 'none',
            width: PIECE_DIAMETER,
            height: PIECE_DIAMETER
        }}
    />;

export default observer(Piece);
export { PIECE_DIAMETER };
