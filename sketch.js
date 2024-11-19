let state = 0;
let img;

//let sounds
let switchFreq = false; /* Use boolean to keep track of whether someone has switched the frequency*/
let static1;
let static2;
let static3;
let static4;
let static5;
let static6;
let birds;
let broadcast;
let ocean;
let numbersstation;

//let random sounds
let sounds = [
  static2,
  static3,
  static4,
  static5,
  static6,
  numbersstation,
  ocean,
  broadcast,
  birds,
];
let randomSound = sounds[Math.floor(Math.random() * sounds.length)];

let currentSound;

function preload() {
  img = loadImage("alarm.png");
  img2 = loadImage("alarm.gif");

  //preload sounds
  static1 = loadSound("static1.mp3");
  static2 = loadSound("static2.mp3");
  static3 = loadSound("static3.mp3");
  static4 = loadSound("static4.mp3");
  static5 = loadSound("static5.mp3");
  static6 = loadSound("static6.mp3");
  birds = loadSound("birds.mp3");
  broadcast = loadSound("broadcast.mp3");
  ocean = loadSound("ocean.mp3");
  numbersstation = loadSound("numbersstation.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  if (state == 0) {
    //draw what's on intro screen

    image(
      img,
      width / 2,
      height / 2,
      width / 1.5,
      ((img.height * width) / img.width) * 0.8
    );
    imageMode(CENTER);
    rect(width / 8, height / 8, (width / 4) * 3, (height / 4) * 3);
    fill(0, 255, 0, 157);
    textSize(18);
    textAlign(CENTER);
    textFont("Courier New");
    stroke(0);
    //strokeWeight(2);
    fill(0);
    text(
      "\ninvisible carrier waves\n\nmodultating signals\n\ncrossing space and time\nparting the veil of reality\n\ntransmitting stories, messages\npromises, warnings\nglimpses of different worlds\nreruns of things now lost\n\ntruths with in static\n\nwaiting for you to listen\nto receive",
      width / 8,
      height / 8 + 10,
      (width / 4) * 3,
      (height / 4) * 3
    );
    fill(0, 255, 0, 157);

    text("click to continue", width / 2, (height / 8) * 7.5);
  } else if (state == 1) {
    //state 1

    image(
      img2,
      width / 2,
      height / 2,
      width / 1.5,
      ((img2.height * width) / img2.width) * 0.8
    );
    imageMode(CENTER);
    fill(0, 255, 0, 157);
    textSize(18);
    textAlign(CENTER);
    textFont("Courier New");
    stroke(0);
    strokeWeight(2);
    text("switch frequency", (width / 8) * 5, (height / 8) * 2);

    //backgroundsound
    /* Use boolean to keep track of whether someone has switched the frequency*/
    if (state == 1 && !static1.isPlaying() && !switchFreq) {
      static1.loop();
      static1.setVolume(0.5);
    }
  }

  //end of draw
}

function mousePressed() {
  if (state == 0 && dist(mouseX, mouseY, width / 2, (height / 8) * 7.5) < 50) {
    state = 1;
  }

  if (
    state == 1 &&
    dist(mouseX, mouseY, (width / 8) * 5, (height / 8) * 2) < 75
  ) {
    let is_playing = currentSound && currentSound.isPlaying();
    if (!is_playing) {
      let sounds = [
        static2,
        static3,
        static4,
        static5,
        static6,
        numbersstation,
        ocean,
        broadcast,
        birds,
      ];
      currentSound = sounds[Math.floor(Math.random() * sounds.length)];

      currentSound.playMode("untilDone");
      currentSound.play();
      currentSound.setVolume(1);
      /* Use boolean to keep track of whether someone has switched the frequency*/
      switchFreq = true;
      static1.stop();
    }
  }
}
