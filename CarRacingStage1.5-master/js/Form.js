class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2');
    this.title = createElement('h1');
    this.button2 = createButton('Reset');
    
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    this.title.style.color="red"
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button2.position(displayWidth-100, 100);
2
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
  finish(){
    this.greeting2.html("Your Rank Is " + player.rank)
    this.greeting2.position(displayWidth/2 - 70, displayHeight/4);
    this.button2.mousePressed(()=>{
      this.greeting2.hide();
      game.update(0)
      player.updateCount(0)
      player.updateRank(0)
      database.ref("players").remove()
      game.start();

    })
  }
}
