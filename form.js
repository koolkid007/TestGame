class Form {
  constructor() {

  }

  display() {
    var title = createElement("h2");
    title.html("Car Racing Game");
    title.position(380, 110);

    var input = createInput("Name");
    input.position(380,200);

    var button = createButton("Play");
    button.position(380, 250);
    button.mousePressed(function() {
        input.hide();
        button.hide();
        var name = input.value();
        playerCount++;
        player.updateCount(playerCount);
        player.updateName(name);
        
        var greeting = createElement("h3");
        greeting.html("Hello! "+ name);
        greeting.position(420,150);
    } );
    
  }

}