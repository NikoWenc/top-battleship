
export default class Gameboard {
    constructor(){
        this.board = this.createBoard();
    };

    // create 10x10 grid
    createBoard(){

        let obj = [];

        for (let x = 1; x < 11; x++){

            obj.push([]);

            for (let y = 1; y < 11; y++){
                obj[x - 1].push({
                    xcoor: x,
                    ycoor: y,
                    haveShip: false,
                    isAttacked: false,
                    shipHere: null,
                });
            };
        };
            return obj;
    };

    addShip(ship, xcoor, ycoor){

        for (let i = 0; i < ship.length; i++) {
            this.board[0][i].haveShip = true;
            this.board[0][i].shipHere = ship;
        };

    };

    receiveAttack(xcoor, ycoor){

        if(this.board[ xcoor -1 ][ ycoor - 1 ].isAttacked) return 'Already Attacked!';

        if (this.board[ xcoor - 1 ][ ycoor - 1 ].haveShip) {
            this.board[ xcoor - 1 ][ ycoor - 1 ].shipHere.hit();
            this.board[ xcoor - 1 ][ ycoor - 1 ].isAttacked = true;
        }else {
            this.board[ xcoor - 1 ][ ycoor - 1 ].isAttacked = true;
        };

    };
};