const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

class SnakePart {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const commands = [];

let speed = 11;

let tileCount = 20;
let tileSize = canvas.width / tileCount - 2; // (400/20)-2= 18  tako da bi nas rep mogo zauzet maximalni prostor u kanvasu i time zavrsimo igru kako pobjednici jer imamo 20x20 kockica, znaci 18 za rep 1 za glavu i 1 za apple u finishu  

// Početna pozicija glave centar ...
let headX = 10; 
let headY = 10;

//rep zmije na pocetku imamo 2 repića
const snakeParts = [];
let tailLength = 2;

// Početna pozicija jabuke ...
let appleX = 5;
let appleY = 5;

let inputsXVelocity = 0;
let inputsYVelocity = 0;

// varijable koje kasnije koristimo za kretnju zmije tacnije glave zmije
let xVelocity = 0;
let yVelocity = 0;


let score = 0;

//muzika koju proizvodi igra nakon pojedene jabuke
const gulpSound = new Audio("gulp.mp3");

let timeoutHandle = null;

function drawGame() {  //Kako se vrti igra
  clearTimeout(timeoutHandle);

  if (commands.length > 0) {
    const command = commands.shift();
    if (command === 'UP') {
      if (inputsYVelocity !== 1) {
        inputsYVelocity = -1;
        inputsXVelocity = 0;
      }
    } else if (command === 'DOWN') {
      if (inputsYVelocity !== -1) {
        inputsYVelocity = 1;
        inputsXVelocity = 0;
      }
    } else if (command === 'LEFT') {
      if (inputsXVelocity !== 1) {
        inputsYVelocity = 0;
        inputsXVelocity = -1;
      }
    } else if (command === 'RIGHT') {
      if (inputsXVelocity !== -1) {
        inputsYVelocity = 0;
        inputsXVelocity = 1;
      }
    }
  }

  xVelocity = inputsXVelocity;
  yVelocity = inputsYVelocity;

  changeSnakePosition();
  let result = isGameOver();
  if (result) {
    return; // ako se desi true u boolean funkciji isGameOver zaustavlja se draw game funkcija i dobijamo zadnju sliku pri zavrsetku igrice
  }

  clearScreen();

  checkAppleCollision();
  drawApple();
  drawSnake();

  drawScore();

  timeoutHandle = setTimeout(drawGame, 1000 / speed);  // Brzina refresh rate igrice
}

function isGameOver() { 
  let gameOver = false;

  if (yVelocity === 0 && xVelocity === 0) { // razlog ovog if statemant je pocetak igre bez njega uvijek je game over jer na pocetku 2 taila i glava su na nultoj poziciji i broji koliziju for petlja između tijela i glave ...
    return false;
  }

  //Ovi Zidovi Duše imaju više nego ti

  if (headX < 0) {
    gameOver = true; // Udarimo u lijevi zid bude game over
  } else if (headX === tileCount) { // ako odes u desnu zid kojih ima tilecounta(20) znamo da je game over 
    gameOver = true;
  } else if (headY < 0) { // Udarimo u gornji zid bude game over
    gameOver = true;
  } else if (headY === tileCount) { // ako odes u donji zid kojih ima tilecounta(20) znamo da je game over 
    gameOver = true;
  }

  for (let i = 0; i < snakeParts.length; i++) { // pomocu ove for petlje brojimo snake partove i imamo if statemant u kojem ako bilo koji snake part na x osi bude na istoj poziciji kao glava na x osi prekidamo igru u biti ujeda zmija sama sebe isto to i za y osu
    let part = snakeParts[i];
    if (part.x === headX && part.y === headY) {
      gameOver = true;
      break;
    }
  }

  if (gameOver) { // Ako dobijemo game over Izbaci fext Game Over ...
    ctx.fillStyle = "black";
    ctx.font = "50px Verdana";
    ctx.fillText("Game Over!", canvas.width / 6.5, canvas.height / 2);
  }

  return gameOver;
}

function drawScore() {  // Funkcija za pisanje scora
  ctx.fillStyle = "white";
  ctx.font = "10px Verdana";
  ctx.fillText("Score " + score, canvas.width - 50, 10);
}

function clearScreen() { // funkcija koja uređuje canvas u kojem se nalazi igrica
  ctx.fillStyle = "blue";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawSnake() { // crtamo zmiju uz pomoc gore navedenog constructor-a , tacnije tijelo zmije 
  ctx.fillStyle = "green"; 
  for (let i = 0; i < snakeParts.length; i++) { 
    let part = snakeParts[i];
    ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
  }

  snakeParts.push(new SnakePart(headX, headY)); //Stavi kocku tijela na mjesto gdje je glava bila 
  while (snakeParts.length > tailLength) {
    snakeParts.shift(); // 
  }

  ctx.fillStyle = "yellow";  // Glava zmije
  ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize);
}

function changeSnakePosition() { // kretnja glave po x i y osi
  headX = headX + xVelocity;
  headY = headY + yVelocity;
}

function drawApple() {  // funkcija crtanja jabuke
  ctx.fillStyle = "red";
  ctx.fillRect(appleX * tileCount, appleY * tileCount, tileSize, tileSize);
}

function checkAppleCollision() { //Funkcija za prikupljanje jabuka i način spawna jabuka u kanvasu po x i y osi uz math.floor i math random
  if (appleX === headX && appleY === headY) {
    appleX = Math.floor(Math.random() * tileCount);
    appleY = Math.floor(Math.random() * tileCount);
    tailLength++;
    score++;
    gulpSound.play();
  }
}

document.body.addEventListener("keydown", keyDown);

function keyDown(event) { // Funkcija za upravljanje snake-a
  //gore
  if (event.keyCode == 38 || event.keyCode == 87) {
    commands.push('UP');
    //87 je w

  }

  //dole
  if (event.keyCode == 40 || event.keyCode == 83) {
    // 83 je s
    commands.push('DOWN');
  }

  //lijevo
  if (event.keyCode == 37 || event.keyCode == 65) {
    // 65 je a
    commands.push('LEFT');
  }

  //desno
  if (event.keyCode == 39 || event.keyCode == 68) {
    //68 je d
    commands.push('RIGHT');
  }
}

drawGame();
