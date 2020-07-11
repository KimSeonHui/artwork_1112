color cw= color(255); //(60,0,140,80)
color cw1 = color(255); //(500,405,125,75)
color cw2 = color(255); // (200,80,300,230)
color cw3 = color(255); //(625,10,75,300)
color cw4 = color(255); // (500,480,500,20)


color cr = color(255,0,0);
color cy1 = color(255,255,0);
color cy2 = color(255,255,0);
color cbu = color(0,0,255);
color cp = color(229,225,239);
color cbl = color(0);

int barWidth = 20;
int lastBar = -1;

void setup(){
  size(700,500);
  background(255);
  strokeWeight(5);
  
  fill(cbl);
  rect(60,80,140,230); //left
  
 fill(cw4);
 rect(200,480,500,20);
  
}

void draw(){
  //gideline vertical
 line(60,0,60,height);
 line(200,0,200,height);
 line(500,0,500,480);
 line(625,10,625,480);
 
 //gideline horizental
 line(0,0,width,0);
 line(500,10,width,10);
 line(0,80,500,80);
 line(500,140,625,140);
 line(60,310,width,310);
 line(500,405,625,405);
 line(0,480,width,480);
 
 //rect
 fill(cr); //red
 rect(0,80,60,400);
 
 fill(cbl);
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
 rect(625, 310,75,170);
 

 
  if(mousePressed == true){
    if(cw != cr && cw != cy1 && cw != cy2 && cw!=cbu && cw!=cbl && cw!=cp){
      if(mouseX > 60 && mouseX <200 && mouseY >0 && mouseY <80){
        cw = color(255,0,0);
        cr = color(255);
      } 
      else if(mouseX >500 && mouseX <625 && mouseY > 405 && mouseY <480){
        cw1 = color(0,0,255);
        cbu = color(255);
      }
      else if(mouseX >200 && mouseX <500 && mouseY > 80 && mouseY <230){
        cw2 = color(255,255,0);
        cy1 = color(255);
      }
    }   
  }
  
  if(mouseX>200 && mouseX<500 && mouseY>0 && mouseY< 80){
     pattern(); 
     stroke(0);
  }
  
  if(mouseX>60 && mouseX<200 && mouseY >80 && mouseY <310){
    rectGr();
    stroke(0);
  }
  
  if(mouseX>200 && mouseX<width && mouseY>480 && mouseY<height){
    rectGr2();
    stroke(0);
  }

}

void pattern(){
  noStroke();
  for(int i = 203; i< 500; i = i+20){
    for(int j = 3; j<80; j= j+20){
      color c = color(int(random(70,255)), int(random(170,255)), int(random(129,255)));
      int alpha = int(random(12,250));
      int size = 15;
      fill(c,alpha);
      rect(i,j,size,size);
    }
  }
}

void rectGr(){
  noStroke();
  int whichBar = mouseX / barWidth;
  if(whichBar != lastBar){
    int barX = whichBar * barWidth;
     fill(mouseY, 255, 255);
     rect(barX, 80, barWidth, 230);
     lastBar = whichBar;
  }
}

void rectGr2(){
  noStroke();
  int whichBar = mouseX / barWidth;
  if(whichBar != lastBar){
    int barX = whichBar * barWidth;
     fill(mouseX-100, mouseX-255, mouseX-150);
     rect(barX, 480, barWidth, 20);
     lastBar = whichBar;
  }
}
