
export default class Ship {
    constructor(length, pos){
        this.length = length;
        this.hits = 0;
        this.isSunken = false;
        this.position = pos;
    };

    hit(){
        this.hits++;
        return this;
    };

    isSunk(){
        (this.hits == this.length) ? this.isSunken = true : this.isSunken;
    };

};