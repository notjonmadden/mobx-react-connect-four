import diagonals from ".";

describe('diagonals', () => {
    it('works on odd-sided board', () => {
        const board = [
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 5],
        ];
        const expected = [
            [3],
            [2, 4],
            [1, 3, 5],
            [2, 4],
            [3],
            [1],
            [2, 2],
            [3, 3, 3],
            [4, 4],
            [5],
        ];

        expect(diagonals(board)).toEqual(expected);
    });

    it('works on even-sided board', () => {
        const board = [
            [1, 2],
            [3, 4]
        ];
        const expected = [
            [3],
            [1, 4],
            [2],
            [1],
            [3, 2],
            [4],
        ];

        expect(diagonals(board)).toEqual(expected);
    });

    it('works on non-square horizontal board', () => {
        const board = [
            [1, 2, 3],
            [3, 2, 1]
        ];

        const expected = [
            [3],
            [1, 2],
            [2, 1],
            [3],
            [1],
            [3, 2],
            [2, 3],
            [1],
        ];

        try {
            expect(diagonals(board)).toEqual(expected);
        } catch (e) {
            fail(e);
        }
    });

    it('works on a non-square vertical board', () => {
        const board = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];
        const expected = [
            [5],
            [3, 6],
            [1, 4],
            [2],
            [1],
            [3, 2],
            [5, 4],
            [6],
        ];

        expect(diagonals(board)).toEqual(expected);
    });
});