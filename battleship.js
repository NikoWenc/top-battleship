
export default class Ship {
    constructor(length){
        this.length = length;
        this.hits = 0;
        this.isSunken = false;
    };

    hit(){
        this.hits++;
        return this;
    };

    isSunk(){
        (this.hits == this.length) ? this.isSunken = true : this.isSunken;
    };

};