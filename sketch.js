const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
var ground_optons={
  isStatic:true
}

ground=Bodies.rectangle(0,380,400,20,ground_optons);
World.add(world,ground)
    var box_options= {
     // isStatic:true
     restitution:1.0,
     friction:0.5,density:3.0
    }
    ball = Bodies.circle(200,10,20,box_options);
    World.add(world,ball);

    console.log(ball.type);
    console.log(ball.position);
}

function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    fill("brown");
    ellipse(ball.position.x,ball.position.y,20,20);
    rect(ground.position.x,ground.position.y,400,20);
}