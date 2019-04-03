import { observable, action, computed } from "mobx";
import { Player, COLUMNS, ColumnId, BOARD_HEIGHT, Optional } from "../../types";
import Column from "./column";
import { findWinner, diagonals } from "./util";
import { range } from "lodash";

export default class Game {
    @observable activePlayer: Player = 'Red';

    @computed get nextPlayer() {
        return this.activePlayer === 'Black' ? 'Red' : 'Black';
    }

    readonly columns: ReadonlyArray<Column>
        = COLUMNS.map(c => new Column(c));

    getColumn(columnId: ColumnId) {
        const column = this.columns.find(c => c.id === columnId);

        if (!column) {
            throw Error('oh no');
        }

        return column;
    }

    @action changeTurn() {
        this.activePlayer = this.nextPlayer;
    }

    @action makeMove(columnId: ColumnId) {
        const column = this.getColumn(columnId);
        
        if (column.isFull) {
            return;
        }

        column.addPiece(this.activePlayer);
        this.changeTurn();
    }

    @computed get winner() {
        let lines = [...this.columns.map(c => c.stack), ...this.rows, ...this.diagonals];

        for (const line of lines) {
            const winner = findWinner(line);

            if (winner) {
                return winner;
            }
        }
        
        return null;
    }

    private get rows() {
        return range(0, BOARD_HEIGHT)
            .map(r => COLUMNS.map(c => this.getPiece(c, r)));
    }

    private getPiece(column: ColumnId, row: number) {
        return this.getColumn(column).getPiece(row);
    }

    private get diagonals() {
        return diagonals<Optional<Player>>(this.rows).filter(d => d.length >= 4);
    }

    @action clear() {
        this.columns.forEach(c => c.clear());
    }
}