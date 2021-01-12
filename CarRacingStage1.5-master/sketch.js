var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Img,car2Img,car3Img,car4Img,groundImg,trackImg,bgImg,trophyImg
var ranks
function preload(){
  car1Img=loadImage("images/car1.png")
  car2Img=loadImage("images/car2.png")
  car3Img=loadImage("images/car3.png")
  car4Img=loadImage("images/car4.png")
  trackImg=loadImage("images/track.jpg")
  bgImg=loadImage("images/form image.jpg")
  trophyImg=loadImage("images/trophy.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState===0){
    background(bgImg)
  }
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    clear()
    game.end()
  }
  if(player.rank===1&&gameState===2){
    image(trophyImg,displayWidth/2,displayHeight/2)
  }
}
