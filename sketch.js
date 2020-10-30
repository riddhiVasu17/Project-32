const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16;
var boxx1, boxx2, boxx3, boxx4, boxx5, boxx6, boxx7, boxx8, boxx9; 
var textt, textImg;
var santaa, slingy;

var score = 0;

function preload() {
  textImg = loadImage("text.png");
}

function setup() {
  var canva = createCanvas(1536, 721);

    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(620, 600, 400, 15);
    stand2 = new Ground(1220, 400, 320, 15);

    //level1
    box1 = new Box(470, 560, 50, 60);
    box2 = new Box(521, 560, 50, 60);
    box3 = new Box(572, 560, 50, 60);
    box4 = new Box(623, 560, 50, 60);
    box5 = new Box(674, 560, 50, 60);
    box6 = new Box(725, 560, 50, 60);
    box7 = new Box(776, 560, 50, 60); 

    //level2
    box8  = new Box2(521, 510, 50, 60);
    box9  = new Box2(572, 510, 50, 60);
    box10 = new Box2(623, 510, 50, 60);
    box11 = new Box2(674, 510, 50, 60);
    box12 = new Box2(725, 510, 50, 60);

    //level 3
    box13  = new Box3(572, 460, 50, 60);
    box14  = new Box3(623, 460, 50, 60);
    box15  = new Box3(674, 460, 50, 60);

    //top
    box16  = new Box4(623, 420, 50, 60);

    //level 1 ~ 2
    boxx1  = new Box(1120, 360, 50, 60);
    boxx2  = new Box(1171, 360, 50, 60);
    boxx3 = new Box(1222, 360, 50, 60);
    boxx4 = new Box(1273, 360, 50, 60);
    boxx5 = new Box(1324, 360, 50, 60);

    //level 2 ~ 2
    boxx6  = new Box2(1171, 330, 50, 60);
    boxx7  = new Box2(1223, 330, 50, 60);
    boxx8  = new Box2(1273, 330, 50, 60);

    //top ~ 2
    boxx9  = new Box3(1223, 310, 50, 60);

    textt = createSprite(width/2-60, 90, 100, 50);
    textt.addImage(textImg);
    textt.scale = (0.7);

    santaa = new santa(200, 350);

    slingy = new SlingShot(santaa.body, {x:200, y:300})
    
}

function draw() {
  background("#4A148C");  

  Engine.update(engine);

  stand1.display();
  stand2.display();

  strokeWeight(4);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  noFill();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();

  box16.display();

  boxx1.display();
  boxx2.display();
  boxx3.display();
  boxx4.display();
  boxx5.display();
  boxx6.display();
  boxx7.display();
  boxx8.display();
  boxx9.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();

  boxx1.score();
  boxx2.score();
  boxx3.score();
  boxx4.score();
  boxx5.score();

  fill("black");
  textSize(30);
  textFont("Comic Sans MS");
  text("Score :  " +score, 1200, 70);

  drawSprites();

  slingy.display();

  santaa.display();
}

function mouseDragged(){
  Matter.Body.setPosition(santaa.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingy.fly();
}

function keyPressed() {
    if (keyCode === 32) {
        slingy.attach(santaa.body);
    }
}