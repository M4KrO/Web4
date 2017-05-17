import {Circle} from "./Circle";
import {Rectangle} from "./Rectangle";
import {Shape} from "./Shape";
import {Triangle} from "./Triangle";

window.onload = (): void => {
    draw();
    let currentShape: HTMLInputElement = document.getElementById("shapes") as HTMLInputElement;
    currentShape.onchange = (): void => ChangeDetailedSettings();
    function ChangeDetailedSettings(): any {
    clearFields();
    switch (currentShape.value) {
        case "1":
            document.getElementById("radius").style.display = "none";
            document.getElementById("x1").style.display = "block";
            document.getElementById("y1").style.display = "block";
            document.getElementById("x2").style.display = "block";
            document.getElementById("y2").style.display = "block";
            document.getElementById("x3").style.display = "block";
            document.getElementById("y3").style.display = "block";
            break;
        case "2":
            document.getElementById("radius").style.display = "block";
            document.getElementById("x1").style.display = "block";
            document.getElementById("y1").style.display = "block";
            document.getElementById("x2").style.display = "none";
            document.getElementById("y2").style.display = "none";
            document.getElementById("x3").style.display = "none";
            document.getElementById("y3").style.display = "none";
            break;
        case "3":
            document.getElementById("radius").style.display = "none";
            document.getElementById("x1").style.display = "block";
            document.getElementById("y1").style.display = "block";
            document.getElementById("x2").style.display = "block";
            document.getElementById("y2").style.display = "block";
            document.getElementById("x3").style.display = "none";
            document.getElementById("y3").style.display = "none";
            break;
        default:
            break;
      }
    }

    function clearFields() {
        let color: HTMLInputElement = document.getElementById("color") as HTMLInputElement;
        color.value = "";
        let borderColor: HTMLInputElement = document.getElementById("border_color") as HTMLInputElement;
        borderColor.value = "";
        let radius: HTMLInputElement = document.getElementById("radius") as HTMLInputElement;
        radius.value = "";
        let X1: HTMLInputElement = document.getElementById("x1") as HTMLInputElement;
        X1.value = "";
        let Y1: HTMLInputElement = document.getElementById("y1") as HTMLInputElement;
        Y1.value = "";
        let X2: HTMLInputElement = document.getElementById("x2") as HTMLInputElement;
        X2.value = "";
        let Y2: HTMLInputElement = document.getElementById("y2") as HTMLInputElement;
        Y2.value = "";
        let X3: HTMLInputElement = document.getElementById("x3") as HTMLInputElement;
        X3.value = "";
        let Y3: HTMLInputElement = document.getElementById("y3") as HTMLInputElement;
        Y3.value = "";
    }

    function draw(): any {
        let info: HTMLElement = document.getElementById("info-block");
        let canvas: HTMLCanvasElement = document.getElementById("canvasArea") as HTMLCanvasElement;
        let ctx: CanvasRenderingContext2D = canvas.getContext("2d");
        let shapeType: HTMLInputElement = (document.getElementById("shapes")) as HTMLInputElement;
        let fillColor: HTMLInputElement = (document.getElementById("color")) as HTMLInputElement;
        let borderColor: HTMLInputElement = (document.getElementById("border_color")) as HTMLInputElement;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let shape: Shape;
        switch (shapeType.value) {
            case "2" :
                shape = new Circle();
                initCircle(shape as Circle);
                break;
            case "1" :
                shape = new Triangle();
                initTriangle(shape as Triangle);
                break;
            case "3" :
                shape = new Rectangle();
                initRectangle(shape as Rectangle);
                break;
            default:
                break;
        }
        if (fillColor.value) { shape.fillColor = fillColor.value; }
        if (borderColor.value) { shape.borderColor = borderColor.value; }
        shape.Draw(ctx);

        info.innerHTML = "Area size: " + shape.CalculateArea() + "<br />Perimeter size: " + shape.CalculatePerimeter();
    }

    let form = document.getElementById("settings-form") as HTMLInputElement;
    form.onchange = (): void => draw();
    function initRectangle(shape: Rectangle) {
        let posX1 = document.getElementById("x1") as HTMLInputElement;
        let posY1 = document.getElementById("y1") as HTMLInputElement;
        let posX2 = document.getElementById("x2") as HTMLInputElement;
        let posY2 = document.getElementById("y2") as HTMLInputElement;

        let X1: number = parseFloat(posX1.value);
        let Y1: number = parseFloat(posY1.value);
        let X2: number = parseFloat(posX2.value);
        let Y2: number = parseFloat(posY2.value);

        if (X1) { shape.posX1 = X1; }
        if (Y1) { shape.posY1 = Y1; }
        if (X2) { shape.posX2 = X2; }
        if (Y2) { shape.posY2 = Y2; }
    }

    function initCircle(shape: Circle) {
        let radius = document.getElementById("radius") as HTMLInputElement;
        let posX = document.getElementById("x1") as HTMLInputElement;
        let posY = document.getElementById("y1") as HTMLInputElement;

        let X: number = parseFloat(posX.value);
        let Y: number = parseFloat(posY.value);
        let radiusCircle: number = parseFloat(radius.value);

        if (X) { shape.radius = X; }
        if (Y) { shape.posX = Y; }
        if (radiusCircle) { shape.posY = radiusCircle; }
    }

    function initTriangle(shape: Triangle) {
        let posX1 =  document.getElementById("x1") as HTMLInputElement;
        let posY1 =  document.getElementById("y1") as HTMLInputElement;
        let posX2 =  document.getElementById("x2") as HTMLInputElement;
        let posY2 =  document.getElementById("y2") as HTMLInputElement;
        let posX3 =  document.getElementById("x3") as HTMLInputElement;
        let posY3 =  document.getElementById("y3") as HTMLInputElement;

        let X1: number = parseFloat(posX1.value);
        let Y1: number = parseFloat(posY1.value);
        let X2: number = parseFloat(posX2.value);
        let Y2: number = parseFloat(posY2.value);
        let X3: number = parseFloat(posX3.value);
        let Y3: number = parseFloat(posY3.value);

        if (X1) { shape.posX1 = X1; }
        if (Y1) { shape.posY1 = Y1; }
        if (X2) { shape.posX2 = X2; }
        if (Y2) { shape.posY2 = Y2; }
        if (X3) { shape.posX3 = X3; }
        if (Y3) { shape.posY3 = Y3; }
    }
};
