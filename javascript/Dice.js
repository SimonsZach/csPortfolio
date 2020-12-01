var totalp = 0;
var totalb = 0;
var countp = 0;
var countb = 0;
var countw = 0;
var rollnum1 = 0;
var rollnum2 = 0;
var rollnum3 = 0;
var rollnum4 = 0;
var rollnum5 = 0;
var rollnum6 = 0;
var rollnum7 = 0;
var rollnum8 = 0;
var rollnum9 = 0;
var totalScore = 0;
var xpos = 0;
var ypos = 0;
var end = false;
var totalWins = 0;


let b;
let one;
let two;
let three;
let four;
let five;
let six;
let seven;
let eight;
let nine;

function setup() {
    createCanvas(375, 750);
    background(0);

    b = new Background();
    one = new DiceRender(110, 110);
    two = new DiceRender(110, 0);
    three = new DiceRender(110, -110);
    four = new DiceRender(0, 110);
    five = new DiceRender(0, 0);
    six = new DiceRender(0, -110);
    seven = new DiceRender(-110, -110);
    eight = new DiceRender(-110, 0);
    nine = new DiceRender(-110, 110);


}

function draw() {
    //165
    b.Draw();
    fill(0);
    textSize(20);
    text("total score: " + totalScore, 47.5, (height / 10) - 5);
    text("total wins: " + totalWins, 47.5, (height / 10) + 60);
    textSize(16);
    fill(255, 0, 0);
    text("try to get as close to 165 as possible", 47.5, (height / 10) - 30);
    one.displayNum(rollnum1);
    two.displayNum(rollnum2);
    three.displayNum(rollnum3);
    four.displayNum(rollnum4);
    five.displayNum(rollnum5);
    six.displayNum(rollnum6);
    seven.displayNum(rollnum7);
    eight.displayNum(rollnum8);
    nine.displayNum(rollnum9);




    if (rollnum1 == -1 || totalScore > 165) {
        rollnum1 = -1;
        b.drawfinal();
        fill(0);
        textSize(20);
        text("Computer score: " + b.rcomp(), 47.5, (height / 10 + 27));
        //delayTime(500);
        b.bust();
        b.winner();
        end = true;
    }
}

function mousePressed() {
    if (rollnum1 != -1) {
        rollnum1 = one.roll();
        rollnum2 = two.roll();
        rollnum3 = three.roll();
        rollnum4 = four.roll();
        rollnum5 = five.roll();
        rollnum6 = six.roll();
        rollnum7 = seven.roll();
        rollnum8 = eight.roll();
        rollnum9 = nine.roll();
        if (rollnum1 != -1) {
            totalScore = totalScore + rollnum1 + rollnum2 + rollnum3 + rollnum4 + rollnum5 + rollnum6 + rollnum7 + rollnum8 + rollnum9;
        }
    }
    if (end == true) {
        if (mouseX > 0 && mouseX < 375 && mouseY > height / 2 - 100 && mouseY < height / 2 + 100 && mousePressed) {
            reset();
        }
    }
}

function reset() {
    clear();
    background(0);
    one.setNum();
    two.setNum();
    three.setNum();
    four.setNum();
    five.setNum();
    six.setNum();
    seven.setNum();
    eight.setNum();
    nine.setNum();
    totalScore = 0;
    b.setComputer((int)(random(90) + 115));
    rollnum1 = 0;
    b.setWinnerc();
    end = false;
}


/*jshint esversion: 6 */
class Background {
    constructor() {
        this.computer = (int)(random(90) + 115);
        this.winnerc = 1;
    };

    Draw() {
        //background
        //dice
        fill(255);
        rect(137.5, (height / 2) - 50, 100, 100);
        rect(27.5, (height / 2) - 50, 100, 100);
        rect(247.5, (height / 2) - 50, 100, 100);
        rect(137.5, (height / 2) - 160, 100, 100);
        rect(27.5, (height / 2) - 160, 100, 100);
        rect(247.5, (height / 2) - 160, 100, 100);
        rect(137.5, (height / 2) + 60, 100, 100);
        rect(27.5, (height / 2) + 60, 100, 100);
        rect(247.5, (height / 2) + 60, 100, 100);


        rect(512.5, (height / 2) - 50, 100, 100);

        //playbutton
        fill(255);
        rect(37.5, (height / 1.25), 300, 125);
        fill(0);
        rect(186.25, (height / 1.25), 3, 125);
        //score
        fill(255);
        rect(37.5, (height / 10) - 50, 300, 125);
        rect(412.5, (height / 10) - 50, 300, 125);
        //scorebuttons
        textSize(40);
        fill(0);
        text("Roll!", 67.5, (height / 1.25) + 75);
        text("Stay", 222.5, (height / 1.25) + 75);
        //tests

    }

    drawfinal() {
        fill(175);
        noStroke();
        rect(0, height / 2 - 100, 375, 200);
        fill(255, 0, 0);
        textSize(30);
        text("Click to restart", width / 2 - 110, height / 2 + 80);
    }
    bust() {
        if (totalScore > 165) {
            fill(255, 0, 0);
            textSize(40);
            text("You went bust", width / 2 - 140, height / 2 - 60);
        } else {
            fill(255, 0, 0);
            textSize(40);
            text("You stayed", width / 2 - 110, height / 2 - 60);
        }
        if (this.computer > 165) {
            fill(255, 0, 0);
            textSize(30);
            text("Compter went bust!", width / 2 - 150, height / 2 - 10);
        } else {
            fill(255, 0, 0);
            textSize(40);
            text("Computer stayed", width / 2 - 160, height / 2 - 10);
        }
    }

    rcomp() {
        return this.computer;
    }

    setComputer(x) {
        this.computer = x;
    }

    setWinnerc() {
        this.winnerc = 1;
    }

    winner() {
        //computer bust, you under
        if (this.computer > 165 && totalScore <= 165) {
            fill(255, 0, 0);
            textSize(40);
            text("You win!", width / 2 - 90, height / 2 + 40);
            totalWins = totalWins + this.winnerc;
            this.winnerc = 0;
        }
        //you bust, comp under
        if (this.computer <= 165 && totalScore > 165) {
            fill(255, 0, 0);
            textSize(40);
            text("You lose", width / 2 - 90, height / 2 + 40);
        }
        //both bust
        if (this.computer > 165 && totalScore > 165) {
            fill(255, 0, 0);
            textSize(40);
            text("You tied!", width / 2 - 90, height / 2 + 40);
        }
        //both under, you win
        if (this.computer <= 165 && totalScore <= 165 && this.computer < totalScore) {
            fill(255, 0, 0);
            textSize(40);
            text("You win!", width / 2 - 90, height / 2 + 40);
            totalWins = totalWins + this.winnerc;
            winnerc = 0;
        }
        //both under, you lose
        if (this.computer <= 165 && totalScore <= 165 && this.computer > totalScore) {
            fill(255, 0, 0);
            textSize(40);
            text("You lose", width / 2 - 90, height / 2 + 40);
        }
        //if tied
        if (this.computer <= 165 && totalScore <= 165 && this.computer == totalScore) {
            fill(255, 0, 0);
            textSize(40);
            text("You tied!", width / 2 - 90, height / 2 + 40);
        }
    }

}
class DiceRender {

    constructor(x, y) {
        this.xpos = x;
        this.ypos = y;
        this.rollnum = 1;
    }

    roll() {
        if (this.rollnum != -1) {
            if (mouseX > 37.5 && mouseX < 186.25 && mouseY > (height / 1.25) && mouseY < (height / 1.25) + 125 && mousePressed) {
                return (int)(random(6) + 1);
            }

            if (mouseX > 186.25 && mouseX < 337.5 && mouseY > (height / 1.25) && mouseY < (height / 1.25) + 125 && mousePressed) {
                this.rollnum = -1;
                return -1;
            }
        }
        return 0;
    }


    displayNum(x) {
        if (x == 1) {
            fill(0);
            noStroke();
            circle(this.xpos + 187.5, this.ypos + 375, 24);
        } else if (x == 2) {
            fill(0);
            noStroke();
            circle(this.xpos + 212.5, this.ypos + 400, 24);
            circle(this.xpos + 162.5, this.ypos + 350, 24);
        } else if (x == 3) {
            fill(0);
            noStroke();
            circle(this.xpos + 212.5, this.ypos + 400, 24);
            circle(this.xpos + 162.5, this.ypos + 350, 24);
            circle(this.xpos + 187.5, this.ypos + 375, 24);
        } else if (x == 4) {
            fill(0);
            noStroke();
            circle(this.xpos + 212.5, this.ypos + 400, 24);
            circle(this.xpos + 162.5, this.ypos + 350, 24);
            circle(this.xpos + 212.5, this.ypos + 350, 24);
            circle(this.xpos + 162.5, this.ypos + 400, 24);
        } else if (x == 5) {
            fill(0);
            noStroke();
            circle(this.xpos + 212.5, this.ypos + 400, 24);
            circle(this.xpos + 162.5, this.ypos + 350, 24);
            circle(this.xpos + 212.5, this.ypos + 350, 24);
            circle(this.xpos + 162.5, this.ypos + 400, 24);
            circle(this.xpos + 187.5, this.ypos + 375, 24);
        } else if (x == 6) {
            fill(0);
            noStroke();
            circle(this.xpos + 212.5, this.ypos + 400, 24);
            circle(this.xpos + 162.5, this.ypos + 350, 24);
            circle(this.xpos + 212.5, this.ypos + 350, 24);
            circle(this.xpos + 162.5, this.ypos + 400, 24);
            circle(this.xpos + 212.5, this.ypos + 375, 24);
            circle(this.xpos + 162.5, this.ypos + 375, 24);
        }
    }

    setNum() {
        this.rollnum = 1;
    }
}