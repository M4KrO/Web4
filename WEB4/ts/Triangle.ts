import {Shape} from "./Shape";

export class Triangle extends Shape {
    private static CalculateLengthOfSide(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }
    private _posX1: number;
    private _posY1: number;
    private _posX2: number;
    private _posY2: number;
    private _posX3: number;
    private _posY3: number;

    constructor() {
        super();
        this.fillColor = "#fff";
        this.borderColor = "#fff";
        this.posX1 = 20;
        this.posY1 = 20;
        this.posX2 = 150;
        this.posY2 = 20;
        this.posX3 = 85;
        this.posY3 = 50;
    }
    public CalculateArea(): number {
        let semiPerimeter: number = this.CalculatePerimeter();
        let side1: number = Triangle.CalculateLengthOfSide(this.posX1, this.posY1, this.posX2, this.posY2);
        let side2: number = Triangle.CalculateLengthOfSide(this.posX1, this.posY2, this.posX3, this.posY3);
        let side3: number = Triangle.CalculateLengthOfSide(this.posX1, this.posY1, this.posX3, this.posY3);
        let area: number = Math.sqrt(semiPerimeter * (semiPerimeter - side1) * (semiPerimeter - side2) *
            (semiPerimeter - side3));
        let tmp: string = (area).toFixed(2);
        return parseFloat(tmp);
    }
    public CalculatePerimeter(): number {
        let side1: number = Triangle.CalculateLengthOfSide(this.posX1, this.posY1, this.posX2, this.posY2);
        let side2: number = Triangle.CalculateLengthOfSide(this.posX1, this.posY2, this.posX3, this.posY3);
        let side3: number = Triangle.CalculateLengthOfSide(this.posX1, this.posY1, this.posX3, this.posY3);
        let tmp: string = (side1 + side2 + side3).toFixed(2);
        return parseFloat(tmp);
    }
    public Draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.moveTo(this.posX1, this.posY1);
        ctx.lineTo(this.posX2, this.posY2);
        ctx.lineTo(this.posX3, this.posY3);
        ctx.lineTo(this.posX1, this.posY1);
        ctx.fillStyle = this.fillColor;
        ctx.fill();
        ctx.lineWidth = 5;
        ctx.strokeStyle = this.borderColor;
        ctx.stroke();
        ctx.closePath();
    }
    set posX1(x: number) {
        this._posX1 = x;
    }
    get posX1(): number {
        return this._posX1;
    }
    set posY1(y: number) {
        this._posY1 = y;
    }
    get posY1(): number {
        return this._posY1;
    }
    set posX2(x: number) {
        this._posX2 = x;
    }
    get posX2(): number {
        return this._posX2;
    }
    set posY2(y: number) {
        this._posY2 = y;
    }
    get posY2(): number {
        return this._posY2;
    }
    set posX3(x: number) {
        this._posX3 = x;
    }
    get posX3(): number {
        return this._posX3;
    }
    set posY3(y: number) {
        this._posY3 = y;
    }
    get posY3(): number {
        return this._posY3;
    }
}
