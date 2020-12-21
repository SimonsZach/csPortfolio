var Gameover = 0;
var test = 0;
var playerCount = 0;
var scorekeeper = 0;
var wins = 0;
var loses = 0;
var winamount = 1;
var loseamount = 1;
var cr = [];
var pl = [];

//variables used for balancing the game
//set bac to 300, amount t0 15, and playeramount t0 5 for mega hardmode :(

//amount of bacteria
var bac = [];
//amount of yellow orbs
var amount = 15;
//amount of green cells per yellow orb
var playeramount = 8;


function setup() {
    noCursor();
    createCanvas(800, 800);
    background(0);
    for (var z = 0; z < amount; z++) {
        let ch = new Create((int)(random(775) + 25), (int)(random(775) + 25));
        cr.push(ch);
    }
    for (var i = 0; i < 100; i++) {
        bac.push(new Bacteria((int)(random(10) + 10), (int)(random(254) + 70), (int)(random(700) + 50), (int)(random(700) + 50)));
    }
}



function draw() {
    if (Gameover == 1) {
        clear();
        noCursor();
        background(255);
        fill(0, 0, 255);
        noStroke();
        circle(mouseX, mouseY, 15/2);
        winamount = 1;
        loseamount = 1;
        for (var i = 0; i < cr.length; i++) {
            cr[i].drawthing();
        }
        for (var i = 0; i < bac.length; i++) {
            bac[i].move();
            bac[i].drawBac();
        }
        for (var i = 0; i < bac.length; i++) {
            if (mouseX + 7.5 > bac[i].leftHitbox() && mouseX - 7.5 < bac[i].rightHitbox()) {
                if (mouseY + 7.5 > bac[i].upHitbox() && mouseY - 7.5 < bac[i].downHitbox()) {
                    Gameover = 2;
                }
            }
        }
        for (var c = 0; c < cr.length; c++) {
            if (mouseX + 7.5 > cr[c].getLeft() && mouseX - 7.5 < cr[c].getRight()) {
                if (mouseY + 7.5 > cr[c].getUp() && mouseY - 7.5 < cr[c].getDown()) {
                    cr[c] = new Create(-100, -100);
                    playerCount = playerCount + playeramount;
                    scorekeeper++;
                }
            }
        }
        while (playerCount > 0) {
            pl.push(new Player(mouseX, mouseY));
            playerCount--;
        }
        for (var j = 0; j < pl.length; j++) {
            pl[j].movePlayer();
            pl[j].drawPlayer();
        }
        if (pl.length > 0) {
            for (var f = 0; f < pl.length; f++) {
                for (var x = 0; x < bac.length; x++) {
                    if (pl[f].getRight() > bac[x].leftHitbox() && pl[f].getLeft() < bac[x].rightHitbox()) {
                        if (pl[f].getDown() > bac[x].upHitbox() && pl[f].getUp() < bac[x].downHitbox()) {
                            pl.pop(f);
                            i--;
                            bac[x].setX(-1000);
                            break;
                            //cr.set(i, new create(-100, -100));
                        }
                    }
                }
            }
        }
        //score
        fill(0);
        textSize(30);
        text(scorekeeper + "/" + amount + " orbs collected!", width / 2 - 150, 40);
        text("Total Wins : " + wins, 100, 780);
        text("Total loses : " + loses, 500, 780);
    } else if (Gameover == 2) {
        clear();
        cursor();
        noStroke();
        textSize(45);
        fill(255);
        text("Gameover", width / 2 - 110, height / 2 - 100);
        textSize(30);
        fill(0, 235, 0);
        text("Click to Restart", width / 2 - 110, height / 2 - 20);
        textSize(15);
        text("(click in corners for best results!)", width / 2 - 120, height / 2 + 5);
        textSize(30);
        fill(235, 0, 0);
        text("Press Enter to Return to Menu", width / 2 - 210, height / 2 + 70);
        while (loseamount == 1) {
            loses++;
            loseamount = 0;
        }
        for (var z = 0; z < amount; z++) {
            cr[z] = new Create((int)(random(775) + 25), (int)(random(775) + 25));
        }
        for (var i = 0; i < bac.length; i++) {
            bac[i] = new Bacteria((int)(random(10) + 10), (int)(random(254) + 70), (int)(random(700) + 50), (int)(random(700) + 50));
        }
        scorekeeper = 0;
        pl = [];
        if (mouseIsPressed) {
            Gameover = 1;
        }
    } else if (Gameover == 0) {
        cursor();
        background(0);
        fill(255);
        textSize(50);
        text("Welcome to N A M E", width / 2 - 250, 200);
        textSize(15);
        text("The rules are simple. You are the blue cell, if you touch the red bacteria...you die.", width / 2 - 300, 300);
        text("Your primary objective is to collect all of the yellow orbs before you get eaten up by the bacteria.", width / 2 - 350, 335);
        text("Don't worry though, when you collect the orbs you will gain some white blood cells...who are actually green.", width / 2 - 390, 370);
        text("These green cells will follow you and lay down their cell lives to protect you from the bacteria.", width / 2 - 350, 405);
        textSize(35);
        fill(0, 235, 0);
        text("Click to Begin!", width / 2 - 125, 525);
        textSize(15);
        text("(Click in corners for best results!)", width / 2 - 124, 550);
        if (mouseIsPressed) {
            Gameover = 1;
        }
    }
    if (scorekeeper == amount) {
        delay(100);
        Gameover = 3;
    }
    if (Gameover == 3) {
        cursor();
        background(0);
        fill(255);
        textSize(50);
        text("You Win!", width / 2 - 110, height / 2 - 85);
        textSize(30);
        fill(0, 235, 0);
        text("Click to Restart", width / 2 - 110, height / 2 - 20);
        textSize(15);
        text("(click in corners for best results!)", width / 2 - 120, height / 2 + 5);
        textSize(30);
        fill(235, 0, 0);
        text("Press Enter to Return to Menu", width / 2 - 210, height / 2 + 70);
        while (winamount == 1) {
            wins++;
            winamount = 0;
        }
        for (var z = 0; z < amount; z++) {
            cr.push(new Create((int)(random(775) + 25), (int)(random(775) + 25)));
        }
        for (var k = 0; k < 10; k++) {
            bac.push(new Bacteria((int)(random(10) + 10), (int)(random(254) + 70), (int)(random(700) + 50), (int)(random(700) + 50)));
        }
        scorekeeper = 0;
        //pl = [];
        if (mousePressed) {
            Gameover = 1;
        }
    }
    console.log(pl.length);
}



function keyPressed() {
    if (Gameover == 2 && key == ENTER) {
        Gameover = 0;
        loses = 0;
        wins = 0;
    }
    if (Gameover == 3 && key == ENTER) {
        Gameover = 0;
        loses = 0;
        wins = 0;
    }
}



class Create {

    constructor(a, b) {
        this.x = a;
        this.y = b;
    }

    drawthing() {
        fill(230, 230, 0);
        noStroke();
        circle(this.x, this.y, 25/2);
    }

    getLeft() {
        return this.x - 13;
    }

    getRight() {
        return this.x + 13;
    }
    getUp() {
        return this.y - 13;
    }
    getDown() {
        return this.y + 13;
    }



}

class Player {

    constructor(xpos, ypos) {
        this.Xpos = xpos;
        this.Ypos = ypos;
    }

    drawPlayer() {
        fill(0, 240, 0);
        stroke(0, 200, 0);
        strokeWeight(2);
        circle(this.Xpos, this.Ypos, 15/2);
    }

    movePlayer() {
        if (dist(this.Xpos, this.Ypos, mouseX, mouseY) < 40) {
            this.Xpos = this.Xpos + (int)(random(31) - 15);
            this.Ypos = this.Ypos + (int)(random(21) - 10);
        } else {
            this.Xpos = this.Xpos + ((mouseX - this.Xpos) / 2);
            this.Ypos = this.Ypos + ((mouseY - this.Ypos) / 2);
        }
    }
    getUp() {
        return this.Ypos - 8;
    }
    getDown() {
        return this.Ypos + 8;
    }
    getLeft() {
        return this.Xpos - 8;
    }
    getRight() {
        return this.Xpos + 8;
    }

}


class Bacteria {



    constructor(size, col, xpos, ypos) {
        this.Size = size;
        this.Color = col;
        this.Xpos = xpos;
        this.Ypos = ypos;
    }

    move() {
        //RandomWalk Xpos
        if (this.Xpos > -5) {
            if (this.Xpos >= 12 && this.Xpos <= 788) {
                this.Xpos = this.Xpos + (int)(random(10) - 5);
            } else if (this.Xpos < 12) {
                this.Xpos = this.Xpos + (int)(random(10) + 1);
            } else {
                this.Xpos = this.Xpos + (int)(random(10) - 10);
            }

            //RandomWalk Ypos
            if (this.Ypos >= 12 && this.Ypos <= 788) {
                this.Ypos = this.Ypos + (int)(random(10) - 5);
            } else if (this.Ypos < 12) {
                this.Ypos = this.Ypos + (int)(random(10) + 1);
            } else {
                this.Ypos = this.Ypos + (int)(random(10) - 10);
            }
        }

    }

    drawBac() {
        fill(255, 0, 0);
        noStroke();
        circle(this.Xpos, this.Ypos, this.Size/2);
    }

   leftHitbox() {
        return this.Xpos - (this.Size / 2);
    }
   upHitbox() {
        return this.Ypos - (this.Size / 2);
    }
   downHitbox() {
        return this.Ypos + (this.Size / 2);
    }
    rightHitbox() {
        return this.Xpos + (this.Size / 2);
    }

    setX(x) {
        this.Xpos = this.x;
    }
}
