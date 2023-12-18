var start = 0;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES)
    noiseDetail(-20);
}

function center() {
    translate(width / 2, height / 2)
}

function draw() {
    background(230);
    noStroke();
    center()
    //centreaza canvas

    var space = 1.25;
    for (var i = 0; i < 360; i += space){
        var x_offset = map(sin(i), 10, -1, 10, 50)
        var y_offset = map(cos(i), 50, -1, 50, 100)
        //perlin noise
        var p = noise(x_offset + start, y_offset + start)
        var h = map(p, 0, 1, -150, 150)

        var r = map(sin(i), -1, 1, 30, 10)
        var g = map(h, -50, 250, 0, 10)
        var b = map(p, 0, 1, 50, 175)
        
        rotate(space);
        fill(r, g, b);
        rect(200, 0, h, 2);
    }

    start += 0.01
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    //recentreaza canvas cand fereastra 
    //isi schimba dimensiunea
  }