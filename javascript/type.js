
var s = "This is text.";
var x = "It changes color.";
var y = "And size!";
var z = 10;
var g = 10;

function setup() {
	var canvas = createCanvas(450, 450);
	background(200);
	fill(0);
	textSize(50);
	text(s, 10, 80);

	for (var i = 0; i < x.length; i++) {
		var c = x.charAt(i);
		fill(random(255), random(255), random(255));
		text(c, z, 160);
		z = z + textWidth(c);
	}

	for (var b = 0; b < y.length; b++) {
		var d = y.charAt(b);
		textSize(random(30, 130));
		text(d, g, 300);
		g = g + textWidth(d);

	}



}