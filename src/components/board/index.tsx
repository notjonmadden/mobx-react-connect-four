import React from 'react';
import WrappedBoard from './Board';
import { observer } from "mobx-react";

interface OuterProps {

}


const Board: React.StatelessComponent<OuterProps> = ({ }) => {

    return <WrappedBoard />;
};

export default observer(Board);