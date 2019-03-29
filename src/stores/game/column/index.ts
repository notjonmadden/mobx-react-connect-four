import { observable, computed, action } from 'mobx';
import { ColumnId, Player, BOARD_HEIGHT, Optional } from "../../../types";
import { findWinner } from '../util';

export default class Column {
    constructor(
        readonly id: ColumnId
    ) {

    }

    @observable private readonly _stack: Player[] = [];
    @computed get stack(): ReadonlyArray<Player> {
        return this._stack;
    }

    @computed get isFull() {
        return this.stack.length >= BOARD_HEIGHT;
    }

    @action addPiece(player: Player) {
        if (this.isFull) {
            throw Error()
        }

        this._stack.push(player);
    }

    @computed get winner() {
        return findWinner(this._stack);
    }

    @action clear() {
        while (this._stack.length) {
            this._stack.pop();
        }
    }

    getPiece(at: number): Optional<Player> {
        if (at >= BOARD_HEIGHT) {
            throw Error();
        }

        if (at >= this._stack.length) {
            return null;
        }

        return this._stack[at];
    }
}