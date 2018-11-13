var img;
var smoke1;
var smoke2;
var smoke3;
var cloud;
var clover;
var ryon;
var y = 90;

function preload(){
  smoke1 = loadImage('smoke1.png');
  smoke2 = loadImage('smoke2.png');
  smoke3 = loadImage('smoke3.png');
  cloud = loadImage('cloud.png');
  clover = loadImage('clover.png');
  ryon = loadImage('ryon.png');
  img = loadImage('2.jpg');
  
}

function setup() {
  createCanvas(400,400);
 
}

function draw() {
  background(251,237,190);
  image(img,50,100,296,205);
  
  if(keyIsPressed){
     image(smoke1,120,y,70,40);
     image(smoke2,155,y-15,95,40);
     image(smoke3,210,y-35,115,50);
     
     if(mouseIsPressed){
        y= y-1; 
    }
  }
  
  //cloud
  if(mouseX >120 && mouseX <180 && mouseY >y && mouseY <y+40){
    background(251,237,190);
    image(img,50,100,296,205);
    image(cloud,100,y,300,180); 
    image(smoke2,155,y-15,95,40);
    image(smoke3,210,y-35,115,50);
        
  }
  
  //clover
  if(mouseX >155 && mouseX <250 && mouseY >y-15 && mouseY <y+25){
    background(251,237,190);
    image(img,50,100,296,205);
    image(smoke1,120,y,70,40); 
    image(clover,155,y-15,250,135);
    image(smoke3,215,y-40,115,50);
  }
  
  //ryon
  if(mouseX >201 && mouseX <325 && mouseY > y-35 && mouseY <y+10){
    background(251,237,190);
    image(img,50,100,296,205);
    image(smoke1,120,y,70,40); 
    image(smoke2,155,y-15,95,40);
    image(ryon,210,y-40,220,160);
  }
 
}