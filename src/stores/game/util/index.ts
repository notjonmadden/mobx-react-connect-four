import { Optional, Player } from "../../../types";
import { take, drop } from "lodash";
import diagonals from './diagonals';

export function findWinner(pieces: ReadonlyArray<Optional<Player>>): Optional<Player> {
    const stop = pieces.length - 3;
    for (let i = 0; i < stop; i += 1) {
        const slice = take(drop(pieces, i), 4);
        const [ player ] = slice;

        if (player === null) {
            continue;
        }

        if (slice.every(p => p === player)) {
            return player;
        }
    }

    return null;
}

export { diagonals };