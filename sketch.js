var thickness, bullet, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 15, 10);
  bullet.shapeColor = "blue";
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor= color(80, 80, 80);
  speed = random(223,321);
  weight = random(30,52);
  bullet.velocityX = speed;
  thickness = random(22,83);
}

function hasCollided(lbullet, lwall) {
  var bulletRightEdge = lbullet.x + (0.5 * (lbullet.width));
  var wallLeftEdge = lwall.x-(0.5 * (lwall.width));

  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}



function draw() {
  background(255,255,255);
  
  if(hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
    if(damage>10) {
      wall.shapeColor=color(255,0,0);
    }
  
    if(damage<10) {
      wall.shapeColor = color(0,255,0);
    }

    textSize(20);
    text("damage: " +damage, 100, 150);

  }


  //console.log(bullet.velocityX);
  //console.log(bullet.shapeColor);

  

  drawSprites();
  //hasCollided(bullet, wall);

}

