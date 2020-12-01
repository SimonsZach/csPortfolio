var startX = 200;
var startY = 0;
var endX = 200;
var endY = 0;


function setup() {
  var canvas = createCanvas(400, 400);
  strokeWeight(3);
  background(0);
}

function draw() {
stroke((int)(random(201)+50), (int)(random(201)+50), (int)(random(201)+50));
while(endX < 400){
endX = startX + (int)(random(19)-9);
endY = startY + (int)(random(10));
line(startX, startY, endX, endY);
startX = endX;
startY = endY;
}

}

function mousePressed(){
clear();
background(0);
startX = (int)(random(381)+20);
startY = 0;
endX = (int)(random(381)+20);
endY = 0;
}