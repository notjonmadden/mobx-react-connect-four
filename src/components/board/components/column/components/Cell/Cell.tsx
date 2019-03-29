import React from 'react';
import { Optional, Player } from "../../../../../../types";
import { observer } from "mobx-react";
import Piece from '../Piece';

interface Props {
    piece: Optional<Player>;
}


const cellStyle: React.CSSProperties = {
    border: '1px solid grey',
    alignSelf: 'stretch',
    padding: '2px'
};

const Cell: React.StatelessComponent<Props> = ({ piece }) => (
    <div style={cellStyle}>
        <Piece player={piece} />
    </div>
);

export default observer(Cell);