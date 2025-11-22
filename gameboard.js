
export default class Gameboard {
    constructor(){
        this.board = createBoard();
    };

    createBoard(){

        let obj = [];

        for (x = 1; x < 11; x++){
            for (y = 1; y < 11; y++){
                obj.push({
                    xcoor: x,
                    ycoor: y,
                    haveShip: false,
                });
            };
        };

        return obj;
    };
    
};