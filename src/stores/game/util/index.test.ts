import { findWinner } from ".";
import { Player, Optional } from "../../../types";

describe('findWinner', () => {
    function makeLine(...pieces: Player[]): Optional<Player>[] {
        return pieces;
    }

    it('returns the player with four consecutive pieces', () => {
        const line = makeLine(
            'Black',
            'Red',
            'Red',
            'Red',
            'Red'
        );

        expect(findWinner(line)).toBe('Red');
    });

    it('return null if no player has four consecutive pieces', () => {
        const line = makeLine(
            'Black',
            'Red',
            'Black',
            'Red',
            'Black',
            'Red',
            'Black',
            'Red'
        );

        expect(findWinner(line)).toBeNull();
    });

    it('works when pieces are at the end', () => {
        const row: ReadonlyArray<Optional<Player>> = [
            null,
            null,
            null,
            null,
            null,
            null,
            'Red',
            'Red',
            'Red',
            'Red',
        ];

        expect(findWinner(row)).toBe('Red');
    })
});