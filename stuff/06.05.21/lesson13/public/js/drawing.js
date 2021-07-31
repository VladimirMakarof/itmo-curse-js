function draw() {
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.strokeStyle = 'orange'; // цвет линии
    context.lineWidth = 5; // толщина линии

    context.beginPath(); // начало рисования
    context.moveTo(50, 50); // 1я точка
    context.lineTo(250, 30); // 2я  точка
    context.lineTo(280, 270); // 3я точка
    context.lineTo(40, 300); // 4я точка
    context.closePath(); // смыкание начала и конца рисунка

    context.fillStyle = 'yellow'; // цвет заливки
    context.fill(); // заливка
    context.stroke(); // рисование
}

function drawCircle(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');
    context.strokeStyle = 'red'; // цвет линии
    context.lineWidth = 7; // толщина линии

    /* Метод arc для рисования окружностей:
     - x координата центра окружности    Горизонтальную координату центра окружности на canvas (в пикселях)
     - y координата центра окружности
     - радиус окружности
     - начальный угол окружности (в радианах)
     - конечный угол окружности (в радианах)*/

    context.beginPath();
    context.arc(350, 350, 100, 0, 2 * Math.PI);

    context.fillStyle = "purple";
    context.fill();

    context.shadowBlur = 10;
    context.shadowColor = "black";

    context.stroke();
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius) {
    let rot = Math.PI / 2 * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.strokeStyle = "blue";
    context.lineWidth = 5;
    context.fillStyle = 'lightblue';
    context.shadowBlur = 0;

    context.beginPath();
    context.moveTo(cx, cy - outerRadius)
    for (let i = 0; i < spikes; i++) {
        x = cx + Math.cos(rot) * outerRadius;
        y = cy + Math.sin(rot) * outerRadius;
        context.lineTo(x, y)
        rot += step

        x = cx + Math.cos(rot) * innerRadius;
        y = cy + Math.sin(rot) * innerRadius;
        context.lineTo(x, y)
        rot += step
    }
    context.lineTo(cx, cy - outerRadius)
    context.closePath();


    context.fill();
    context.stroke();
}
