class Point{
    x : number;
    y : number;

    constructor(x : number, y : number){
        this.x = x;
        this.y = y;
    }

    getCoordinates() : string{
        return `x : ${this.x}, y : ${this.y}`
    }
}

