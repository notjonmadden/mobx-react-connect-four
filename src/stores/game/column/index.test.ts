import Column from ".";
import { BOARD_HEIGHT } from "../../../types";

let column: Column;
const resetColumn = () => column = new Column('A');

describe('Column.addPiece', () => {
    beforeEach(resetColumn);

    it('throws an error if too many pieces are added', () => {
        expect(() => {
            for (let i = 0; i <= BOARD_HEIGHT; i += 1) {
                column.addPiece('Red');
            }
        }).toThrowError();
    });

    it('adds pieces in order', () => {
        column.addPiece('Red');
        column.addPiece('Black');
        column.addPiece('Black');
        column.addPiece('Red');
        column.addPiece('Black');

        expect(column.stack).toEqual(['Red', 'Black', 'Black', 'Red', 'Black'])
    })
})

describe('Column.winner', () => {
    beforeEach(resetColumn);

    it('is null for a new Column', () => {
        expect(column.winner).toBeNull();
    });
});