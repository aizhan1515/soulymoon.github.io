let myFont;
function preload() {
  myFont = loadFont('data/Orbitron-VariableFont_wght.ttf');
}

//text assets//
let R0A='3 a.m. You`re calling a cab service. A female operator`s voice says "Hallo, Guten Morgen! Wohin wollen Sie gehen?! You don`t speak German. What do you do?'
let C0A='You ask if she speaks English.'
let C0B='You hung up the phone.'
let R1A='DU LEBST IN OSTERREICH! SPRICH DEUTSCH!!!'
let R1B='You call again in order if someone else picks up the phone.'
//let R1Bb='You call again in order if someone else picks up the phone.'//
let C1A='You try to speak some German.'
let C1B='She hang ups the phone.'
let R2A='She is trying to understand and communicate with you. But it`s quite impossible.' 
let R2Ab='She picks up again.'
let R2B='You call again in order if someone else picks up the phone.'
let C2A='You hung up again and cry. Next day you register for a German course.'
let C2B='You say "Englisch ist heute, im 21. Jahrhundert, die gängige Sprache in der Welt. Lernen Sie Englisch, bitte :)".'
//let R3A=//
//let R3B='You exit the store without saying hello to the cashier, just in case. With the 50 cans of pea soup you bought you manage to survive without leaving the house for another one and a half months.'
//let R3Bb='However, it doesn’t look like the disease is going anywhere any time soon, and the government has realised that too. They have started to allow some workplaces to open up again.'
//let C3A='She picks up again.'
//let C3B='sHE PICKS UP AGAIN.'
//let R4A='SHE PICKS UP AGAIN'
//let R4B='You continue your monthly visits to the store for another three months. Finally enough clinical trials have been done and the vaccine is starting to become available for the public.'
//let C4A='Get vaccinated. I will be invincible!'
//let C4B='The vaccine might still have some unforeseen side effects since the schedule was tight. Lockdown for life!'
//let R5A='Even though the vaccine was developed quickly, it wasn’t quick enough. The virus has already mutated so many times that the vaccine only gives you a false sense of security. You get the disease and die. Game over.'
//let R5B='The prolonged lockdown has taken a toll on your mental health, and you feel like the lockdown life is not worth living any more. Little by little you become severely depressed and die by your own hand. Game over.'

let round=0
let subround=0
let path='A'

let AButton
let BButton
let nextButton
let resetButton

let buttonY
let AX
let BX
let buttonHeight
let buttonWidth
let buttonX
let ABWidth

let p

function setup() {
 
  textFont(myFont);
  
  p=windowWidth/1920.0
  createCanvas(windowWidth, windowHeight);
  AButton=createDiv()
  BButton=createDiv()
  nextButton=createDiv()
  resetButton=createDiv()
  
  buttonHeight=80*p
  buttonWidth=300*p
  ABWidth=buttonHeight
  
  buttonX=windowWidth/2-buttonWidth/2
  buttonY=windowHeight*5/6
  AX=windowWidth/2-150*p-ABWidth/2
  BX=windowWidth/2+150*p-ABWidth/2
  
  
  nextButton.position(buttonX,buttonY)
  nextButton.size(buttonWidth,buttonHeight)
  nextButton.mouseClicked(()=>{subround++})
  
  resetButton.position(buttonX,buttonY)
  resetButton.size(buttonWidth,buttonHeight)
  resetButton.mouseClicked(()=>{subround=0;round=0;path='A'})
  
  AButton.position(AX,buttonY)
  AButton.size(ABWidth,buttonHeight)
  AButton.mouseClicked(()=>{path='A';subround=0; round++})
  
  BButton.position(BX,buttonY)
  BButton.size(ABWidth,buttonHeight)
  BButton.mouseClicked(()=>{path='B';subround=0; round++})
  
  //trash.position(boxXmarigin,boxYmarigin)
  //trash.size(boxWidth,boxHeight)
  background(100);
}

function draw() {
  clear()
  background("#F27702");
  //well this is a very stupid and non-scalable way to implement this, but at least it is using if-else statements
  if(round===0){
    ABchoice()
    storyAB(R0A,C0A,C0B)
  }else if(round===1){
    if(path==='A'){
      ABchoice()
      storyAB(R1A,C1A,C1B)
    }else if(path==='B'){
      if(subround==0){
        story(R1B)
        next()
      }else{
        story(R1Bb)
        reset()
      }
    }else{bug()}
  }else if(round===2){
    if(path==='A'){
      if(subround==0){
        story(R2A)
        next()
      }else{
        ABchoice()
        storyAB(R2Ab,C2A,C2B)
      }    
    }else if(path==='B'){
        story(R2B)
        reset()
    }else{bug()}
  }else if(round===3){
    if(path==='A'){
      reset()
      story(R3A)
    }else if(path==='B'){
      if(subround==0){
        story(R3B)
        next()
      }else{
        storyAB(R3Bb,C3A,C3B)
        ABchoice()
      }
    }else{bug()}
  }else if(round===4){
    if(path==='A'){
      reset()
      story(R4A)
    }else if(path==='B'){
        storyAB(R4B,C4A,C4B)
        ABchoice()
    }else{bug()}
  }else if(round===5){
    if(path==='A'){
      reset()
      story(R5A)
    }else if(path==='B'){
        story(R5B)
        reset()
    }else{bug()}
    
  }else{
    bug()
  }
  /*
  text('round '+round,300,100)
  text('path '+path,300,200)
  text('sub '+subround,300,300)
  */
}

function story(message){
  fill(0)
  textSize(48*p);
  textAlign(LEFT, TOP);
  text(message,windowWidth/4,windowHeight/16,windowWidth/2,windowHeight/2)
}
function storyAB(message,A,B){
  fill(0)
  textSize(48*p);
  textAlign(LEFT, TOP);
  text(message,windowWidth/4,windowHeight/16,windowWidth/2,windowHeight/2)
  text('A: '+A,windowWidth/4,windowHeight*9/16,windowWidth*2/3,windowHeight/8)
  text('B: '+B,windowWidth/4,windowHeight*11/16,windowWidth*2/3,windowHeight/8)
  
}
function bug(){
    story('You found a bug')
}

function ABchoice(){
  AButton.show()
  BButton.show()
   nextButton.hide()
  resetButton.hide()
  
  
  fill("#E54900");
  rect(AX,buttonY,ABWidth,buttonHeight)
  rect(BX,buttonY,ABWidth,buttonHeight)
  fill(0);
  textSize(60*p);
  textAlign(CENTER, CENTER);
  text('A',AX+ABWidth/2,buttonY+buttonHeight/2)  
  text('B',BX+ABWidth/2,buttonY+buttonHeight/2)
}
function next(){
  AButton.hide()
  BButton.hide()
   nextButton.show()
  resetButton.hide()
  
  
  fill("#E54900");
  rect(buttonX,buttonY,buttonWidth,buttonHeight)
  fill(0);
  textSize(60*p);
  textAlign(CENTER, CENTER);
  text('You lost!',windowWidth/2,buttonY+buttonHeight/2);
  
}
function reset(){
  AButton.hide()
  BButton.hide()
   nextButton.hide()
  resetButton.show()
  
  
  fill("#E54900");
  rect(buttonX,buttonY,buttonWidth,buttonHeight)
  fill(0);
  textSize(60*p);
  textAlign(CENTER, CENTER);
  text('Try again',windowWidth/2,buttonY+buttonHeight/2)
}
