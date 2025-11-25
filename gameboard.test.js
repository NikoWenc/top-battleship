import Gameboard from "./gameboard";
import Ship from "./battleship";

test('test board', () => {
    const board = new Gameboard();

    board.createBoard();

    expect(board.board[0][0]).toStrictEqual({
        xcoor: 1, 
        ycoor: 1, 
        haveShip: false, 
        isAttacked: false, 
        shipHere: null,
    })
});

test('add ship', () => {
    const board = new Gameboard();
    const ship = new Ship(4);

    board.createBoard();
    board.addShip(ship, 1, 1);

    expect(board.board[0][0].haveShip)
    .toBe(true);

    expect(board.board[0][1].haveShip)
    .toBe(true);

    expect(board.board[0][2].haveShip)
    .toBe(true);

    expect(board.board[0][3].haveShip)
    .toBe(true);

});

test('attack ship', () => {
    const board = new Gameboard();
    const ship = new Ship(4);

    board.createBoard();
    board.addShip(ship, 1, 1);
    board.receiveAttack(1,1);

    expect(board.board[0][0].shipHere.hits).toBe(1);

    expect(board.receiveAttack(1,1)).toBe('Already Attacked!');

    expect(board.board[0][0].shipHere.hits).toBe(1);
});