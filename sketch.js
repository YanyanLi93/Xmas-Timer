let img;
let targetDate;
let bgm, sound2, sound3;

function setup() {
  createCanvas(500, 500);
  targetDate = new Date('December 25, 2024 00:00:00');
}

function preload(){
  img = loadImage('bg.jpg'); 
  bgm = loadSound("happy.mp3");
  sound2 = loadSound("tick3.wav");
  sound3 = loadSound("xmas.wav");
}
function draw() {
  background(51, 153, 51);
  imageMode(CENTER);
  image(img, 250, 250,500,500);


  // Get the current date and time
  let currentDate = new Date();

  // Calculate the difference between the target date and the current date
  let timeDiff = targetDate - currentDate;

  // If the countdown is complete, display a "Merry Christmas" message
  if (timeDiff <= 0) {
    sound3.setVolume(0.2);
     if (!sound3.isPlaying()){
    sound3.loop();
    sound3.play();
    }
    
    fill(51, 153, 51);
    rectMode(CENTER);
    stroke(255,0,0);
    strokeWeight(3);
    rect(width / 2, height / 2 + 200, 400, 90);
    fill(255);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(32);
    text("Merry Christmas!", width / 2, height / 2 + 200);

  } else {
    // Calculate the remaining time in days, hours, minutes, and seconds
    bgm.setVolume(0.1);
    if (!bgm.isPlaying()){
      bgm.loop();
    bgm.play();
      }
    sound2.setVolume(0.2);
     if (!sound2.isPlaying()){
      sound2.loop();
      sound2.play();
       }
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    // Display the countdown timer
    rectMode(CENTER);
    stroke(255,0,0);
    strokeWeight(3);
    fill(14, 57, 17);
    rect(width / 2, height / 2 + 200, 400, 90);
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(48);
    text("Christmas is here in...", width / 2, height / 2 + 100);
    noStroke();
    text(days + "d" + " " + hours + "h" + " " + minutes + "m" + " "+ seconds + "s", width / 2, height / 2 + 200);

  }
}

