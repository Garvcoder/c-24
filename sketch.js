const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;
// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

function setup() {
    
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,398,1200,10)
    img = loadImage("unnamed.png");
    img2 = loadImage("image (11).png"); 

      
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.

}

function draw() {
    
    ground.display(); 
    ground.shapeColor = "pink"
    image(img,65,227);
    image(img2,370,200,50,50);
    image(img2,600,160,50,50);
    image(img2,900,240,50,50);
// Remember to update the Matter Engine and set the background.
}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}