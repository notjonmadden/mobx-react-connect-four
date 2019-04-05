import React from 'react';
import Board from './components/board';
import { observer } from 'mobx-react';

const App: React.StatelessComponent = () => (
  <div style={{ margin: '1em 37.5vw' }}>
    <Board />
  </div>
);

export default observer(App);
