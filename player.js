class Player {
  constructor() {

  }
  
  getCount() {
    var countRefer = database.ref('playerCount');
    countRefer.on("value", function (data) {
      playerCount = countRefer.val();  
    });  
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count  
    });  
  }
  
  updateName(name) {
    var playerRef = "player" + playerCount;  
    database.ref(playerRef).set({ name:name });  
  }




}