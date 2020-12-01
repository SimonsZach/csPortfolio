function setup() {
	var canvas = createCanvas(480, 480);
	fill(255, 0, 0);
	background(0, 255, 0)

}

function draw() {
	//head
	stroke(0);
	fill(235, 221, 150);
	ellipse(240, 240, 300, 300);
	//eyes
	fill(0);
	ellipse(280, 220, 50, 50);
	ellipse(200, 220, 50, 50);
	rect(190, 196, 100, 10);
	//mouth
	fill(255, 0, 0);
	rect(190, 280, 100, 10);
	//Arrow
	fill(0, 255, 255);
	noStroke();
	rect(220, 90, 30, 60);
	triangle(210, 150, 260, 150, 235, 170);
	//text
	textSize(32);
	fill(0);
	text("Zach Simons", 50, 50);
	text("ACSCompSciPandemic2020 ", 50, 75);
}
