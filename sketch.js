const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Bodies

var engine, world, ground, ball;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  var options={
    isStatic:true,
  }
  ground = Body.rectangle(200,390,200,20, options);
  World.add(world,ground);

  var ball_options={
    restitution:1.0,
  }

  ball = Body.circle(200,100,20,ball_options);
  World.add(world,ball);
}

function draw() {
  background('blue');  

Engine.update(engine);

  rectMode(CENTER);
  fill("black");
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  fill("pink");
  ellipse(ball.position.x, ball.position.y, 20,20);
}