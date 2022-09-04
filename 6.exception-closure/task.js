//Задача №1
function parseCount(meaning) {
    let resilt = Number.parseInt(meaning)
    if(Number.isNaN(resilt)) {
        throw new Error("Невалидное значение");
    } 
    return resilt;
}

function validateCount(arg) {
    try {
        return parseCount(arg);
    } catch (error) {
        return error
    }
}

//Задача №2
class Triangle {
    constructor(hypotenuse, katetA, katetB){
        this.hypotenuse = hypotenuse;
        this.katetA = katetA;
        this.katetB = katetB;
        if(hypotenuse + katetA < katetB ||
            hypotenuse + katetB < katetA ||
            katetA + katetB < hypotenuse) {
                throw new Error("Треугольник с такими сторонами не существует");
            }
    }

    getPerimeter() {
        return this.hypotenuse + this.katetA + this.katetB;
    }

    getArea() {
        let halfPerimeter = this.getPerimeter() / 2;
        return Number(Math.sqrt(halfPerimeter * (halfPerimeter - this.hypotenuse) * (halfPerimeter - this.katetA) * (halfPerimeter - this.katetB)).toFixed(3));
    }
}

function getTriangle(sideA, sideB, sideC) {
    try {
        return new Triangle(sideA, sideB, sideC);
    } catch (error) {
        return new class AnotherTriangle {
            getPerimeter = () => 'Ошибка! Треугольник не существует';
            getArea = () => 'Ошибка! Треугольник не существует';
        }
    }
}