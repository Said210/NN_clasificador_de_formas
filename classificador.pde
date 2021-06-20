int fc;
void setup() {
  size(64, 64);
  fc = 0;
  
  
  
}

void draw() {
  
  for(int i = 0; i < 5; i++){
    background(255);
    strokeWeight(6);
    pushMatrix();
    float r = random(24, 40);
    float x = random(r, width-r);
    float y = random(r, height-r);
    translate(x,y);
    
    switch(i){
      case 0:
        ellipse(0f, 0f, r * random(0.5,1), r*random(0.5,1));
        saveFrame("ModelTrainner/data/ellipse###.png");
      break;
      case 1:
        ellipse(0f, 0f, r, r);
        saveFrame("ModelTrainner/data/circle###.png");
      break;
      case 2:
        rectMode(CENTER);
        rotate(random(0,2)*PI);
        rect(0,0, r, r);
        saveFrame("ModelTrainner/data/rect###.png");
      break;
      case 3:
        rotate(random(0,2)*PI);
        float minir = r * random(0.3, 0.7);
        triangle(0, -minir, minir, minir, -minir, minir);
        saveFrame("ModelTrainner/data/triangle###.png");
      break;
      
      case 4:
        rotate(random(0,2)*PI);
        star(0, 0, r * random(0.3,0.5), r*random(0.6,0.7), 5);
        saveFrame("ModelTrainner/data/star###.png");
      break;
      
      default:
      break;
    }
    popMatrix();
  }
  fc++;
  // Cuantas immagenes se generarán.
  if (fc==100){exit();}
}


void star(float x, float y, float radius1, float radius2, int npoints) {
  float angle = TWO_PI / npoints;
  float halfAngle = angle/2.0;
  beginShape();
  for (float a = 0; a < TWO_PI; a += angle) {
    float sx = x + cos(a) * radius2;
    float sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
