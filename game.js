class Game{
  constructor() {

  }
 
  getStarted() {
    var gameStateRefer = database.ref("gameState"); 
    gameStateRefer.on("value", function(data) {
      gameState = data.val();
    });
  }

  async start() {
    if(gameState === 0) {
      player = new Player();

      var playerRefer = await database.ref('playerCount').once("value");
      if(playerRefer.exists()) {
        playerCount = playerRefer.val();
        player.getCount();
      }

      form = new Form();  
      form.display();
      console.log("I am in start");
    }  
  }
  update(count) {
    database.ref("/").update({gameState: count});
    console.log("HELLO");
  }  





}