

let angle = 0;
let radius = 100;
let speed = 1;
let paused = false;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(20);

    let centerX = width / 2;
    let centerY = height / 2;

    // Draw the circular path.
    noFill();
    stroke(150);
    circle(centerX, centerY, radius * 2);

    fill(255);
    noStroke();
    circle(centerX, centerY, 15);


    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;

    // Draw the moving dot.
    fill(0, 150, 255);
    circle(x, y, 20);

    if (!paused) {
        angle += speed;
    }


    fill(255);
    textSize(12);
    text("SPACE = Pause / Resume", 10, 20);
    text("UP / DOWN = Change Speed", 10, 40);
    text("Speed: " + speed, 10, 60);
}


function keyPressed() {
    if (key === ' ') {
        paused = !paused;
    }

    if (keyCode === UP_ARROW) {
        speed++;
    }

    if (keyCode === DOWN_ARROW) {
        speed = max(1, speed - 1);
    }
}
