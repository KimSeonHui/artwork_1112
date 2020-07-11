   
  //rectGr()
  var barWidth = 20;
  var lastBar = -1;
  
function setup() {
  createCanvas(700,500);
  background(255,255,255);
  strokeWeight(3);

  //color
  var cw= color(255,255,255); //(60,0,140,80)
  var cw1 = color(255,255,255); //(500,405,125,75)
  var cw2 = color(255,255,255); // (200,80,300,230)
  var cw3 = color(255,255,255); //(625,10,75,300)
  var cw4 = color(255,255,255); // (500,480,200,20)

  var cr = color(255,0,0);
  var cy1 = color(255,255,0);
  var cy2 = color(255,255,0);
  var cbu = color(0,0,255);
  var cp = color(229,225,239);
  var cbl = color(0,0,0);
  
    //rect
 fill(cr); //red
 rect(0,80,60,400);
 
 fill(cbl);
 rect(60,80,140,230); //left
 rect(500,10,125,130); //right

 
 fill(cy1); //yellow
 rect(200,0,300,80);
 fill(cy2);
 rect(500,140,125,170);
 
 fill(cbu); //blue
 rect(200,310,300,170);
 
 fill(cp); //right purple
 rect(0,0,60,80);
 rect(60,310,140,170);
 rect(60,480,140,20);
 
 fill(cw);
 rect(60,0,140,80);
 
 fill(cw1);
 rect(500,405,125,75);
 
 fill(cw2);
 rect(200,80,300,230);

 fill(cw3);
 rect(625,10,75,300);
 
 fill(cw4);
 rect(200,480,500,20);
 
}

function draw() {
  //gideline vertical
 line(60,0,60,height);
 line(200,0,200,height);
 line(500,0,500,480);
 line(625,10,625,480);
 line(width,0,width,height);
 
 //gideline horizental
 line(0,0,width,0);
 line(500,10,width,10);
 line(0,80,500,80);
 line(500,140,625,140);
 line(60,310,width,310);
 line(500,405,625,405);
 line(0,480,width,480);
 line(0,height,width,height);
 

 
 if(mouseIsPressed){
      if(mouseX > 60 && mouseX <200 &&  mouseY>0 && mouseY <80){
        cw = color(255,0,0);
        fill(cw);
        rect(60,0,140,80);

        cr = color(255,255,255);
        fill(cr);
        rect(0,80,60,400);
        
      }
      else if(mouseX >200 && mouseX <500 && mouseY > 80 && mouseY <230){
        cw2 = color(255,255,0);
        fill(cw2);
        rect(200,80,300,230);
        
        cy1 = color(255);
        fill(cy1); //yellow
        rect(200,0,300,80);
      }
       else if(mouseX >500 && mouseX <625 && mouseY > 405 && mouseY <480){
        cw1 = color(0,0,255);
        fill(cw1);
        rect(500,405,125,75);
        
        cbu = color(255);
        fill(cbu); //blue
        rect(200,310,300,170);
      }
   } 
   
   //make Pattern();
   if(mouseX>200 && mouseX<500 && mouseY>0 && mouseY< 80){
     pattern(); 
     stroke(0);
  }
  
  //rectGr()
   if(mouseX>60 && mouseX<200 && mouseY >80 && mouseY <310){
     rectGr();
     stroke(0);
  }
  
  if(mouseX>200 && mouseX<width && mouseY>480 && mouseY<height){
    rectGr2();
    stroke(0);
  }
 
}

function pattern(){
  noStroke();
  for(var i = 203; i< 500; i = i+20){
    for(var j = 3; j<80; j= j+20){
      var c = color(random(70,255), random(170,255), random(129,255));
      var alpha = random(12,250);
      var size = 15;
      fill(c,alpha);
      rect(i,j,size,size);
    }
  }
}

function rectGr(){
  noStroke();
  var whichBar = mouseX / barWidth;
  if(whichBar != lastBar){
    var barX = whichBar * barWidth;
     fill(mouseY, 255, 255);
     rect(barX, 80, barWidth, 230);
     lastBar = whichBar;
  }
}

function rectGr2(){
  noStroke();
  var whichBar = mouseX / barWidth;
  if(whichBar != lastBar){
    var barX = whichBar * barWidth;
     fill(mouseX-100, mouseX-255, mouseX-150);
     rect(barX, 480, barWidth, 20);
     lastBar = whichBar;
  }
}
