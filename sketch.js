let logo
let dvdImage

function setup(){
  createCanvas(800, 600);
  // Load the image once.
  dvdImage = loadImage("https://cdn.glitch.com/eaea72a4-ac6d-4777-b76e-f37d75959aa5%2Fdvd.jpeg?1515761833387");

  // Set up an object with some starting values.
  logo = {}
}

function draw(){
  // Draw the background (we do this in the draw loop for animations)
  background(220);

  // Draw the logo
  image(dvdImage, 50, 50, 200, 150);
}