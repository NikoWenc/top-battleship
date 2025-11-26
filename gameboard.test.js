import Gameboard from "./JS/gameboard/gameboard";
import Ship from "./JS/ship/battleship";

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
    const ship = new Ship(4, 'hori');
    const ship1 = new Ship(4, 'vert');

    board.createBoard();
    board.addShip(ship, 1, 1);
    board.addShip(ship1, 2, 1);

    expect(board.board[0][0].haveShip)
    .toBe(true);

    expect(board.board[0][1].haveShip)
    .toBe(true);

    expect(board.board[0][2].haveShip)
    .toBe(true);

    expect(board.board[0][3].haveShip)
    .toBe(true);

    expect(board.board[1][0].haveShip).toBe(true);

});

test('attack ship', () => {
    const board = new Gameboard();
    const ship = new Ship(4, 'hori');

    board.createBoard();
    board.addShip(ship, 1, 1);
    board.receiveAttack(1,1);

    expect(board.board[0][0].shipHere.position).toBe('hori');

    expect(board.board[0][0].shipHere.hits).toBe(1);

    expect(board.receiveAttack(1,1)).toBe('Already Attacked!');

    expect(board.board[0][0].shipHere.hits).toBe(1);
    board.receiveAttack(1,2);
    expect(board.board[0][1].shipHere.hits).toBe(2);
});