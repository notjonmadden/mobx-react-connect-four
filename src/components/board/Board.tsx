import React from 'react';
import { Player, ColumnId, COLUMNS, Optional } from '../../types';
import { observer } from 'mobx-react';
import Column from './components/column';
import Header from './components/header';

interface Props {

}

const Board: React.StatelessComponent<Props> = ({ }) => (
    <div>
        <Header />
        <div style={{ display: 'flex', justifyContent: 'center' }}> 
            {COLUMNS.map(c => (
                <div style={{ display: 'flex', justifyContent: 'center', padding: '0em .125em' }}>
                    <Column id={c} />
                </div>
            ))}
        </div>
    </div>
);

export default observer(Board);