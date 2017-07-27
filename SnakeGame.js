var s;
var scl = 20;
var pause = false;
var food;

function setup() {
  createCanvas(600, 600);
  resetscetch();
  var button = createButton("Reset");
  button.mousePressed(resetscetch)
  Sound.loop();
  Sound.setVolume(0.1);
  var button1 = createButton("Pause");
  button1.mousePressed(pausescetch);

  


}
function resetscetch() {
   s = new Snake();
  frameRate(10);
  pickLocation();

}
function pausescetch() {
  s.dir(0, 0);
  
  if (pause == false) {
   pause = true; 
  } else {
   pause = false; 
  }
  if (!Sound.isPlaying()) {
    Sound.play(); 
    Sound.setVolume(0.1);    
    button.html("Pause");

  }  else {
    Sound.pause();
    Sound.setVolume(0.1);    
    button.html("Play");

  }

  

}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}



function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
    up.play()
  }
  s.death();
  s.update();
  s.show();
  if (pause == true) {
  fill("255, 230, 12")
  textSize(60)
  text("You Paused Jerk", 70, height*0.5);
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}