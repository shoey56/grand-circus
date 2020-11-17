(function () {

  // Create an array of 3 characters. Each character is an object with two properties--name and health.
      
  var characters = [
    {name:"Shaye56",health: 100},
    {name:"Phantomzero",health: 100},
    {name:"Kanadien", health: 100}
  ];
  
  
  function characterInfo() {
      for (character of characters){ 
      if (this.character.health > 0){
          alert(`${this.character.name} has ${this.character.health} health.`);
    }else {
      alert(`${this.character.name} has been defeated`);
    }
  }
  }
  
  /* Create an object outside the array in a variable called opponent. The opponent also has
   name and health properties. (the opponent should start with more health than any of the
   characters.)*/
  
  var opponent = {name: "Dr. JS", health: 150};
  
  function opponentInfo(){
  if (opponent.health > 0){
    alert(`${opponent.name} has ${opponent.health} health`);
    let defeatedOpponent = false;
    }else{
    alert(`${opponent.name} has been defeated. Congrats you won!`);
    return defeatedOpponent = true;
    }
  }
  
  function choosePlayer(){
    let playerChoice = prompt("Please select character 1, 2, or 3.");
    if (playerChoice > 3 || playerChoice < 1){
      playerChoice = prompt("Input was invalid. Please select character 1, 2, or 3.");
    }else{
      return playerChoice;
      }
  }
  
  function battle(playerChoice){
    if (characters[(playerChoice -1)].health < 1){
    console.log(characters[(playerChoice -1)].health);
      playerChoice = prompt("This player has been defeated. Please select another player.");
    }
    characters[(playerChoice -1)].health = characters[(playerChoice -1)].health - Math.floor(Math.random() * 50) + 1;
    opponent.health = opponent.health - Math.floor(Math.random() * 50) + 1;
  }
  console.log(characters[0].health)
   if (characters[0].health <= 0 && characters[1].health <= 0 && characters[2].health<= 0){
    alert(`${opponent.name} has won. Please try again`);
  }
  
  // Create a loop that:
  do{
    // ● Prints out the name and health of all three characters plus the opponent.
    characterInfo(); 
    let defeated = opponentInfo();
      if (defeated === true){
      break;
      }
    let playerChoice = choosePlayer(); // ● Prompts the user to pick a character by number (1, 2, or 3).
     if(playerChoice === null) { // ● Exit the loop when the user response is null, which means that the cancel button was clicked.
       alert("Thanks for playing!");
    break;
  }
    battle(playerChoice);// ● “Battles” the selected character against the opponent. Remove five health from both
  // the character and the opponent. (Or you can remove a random number from each.)
  }while(true);
  
  
    })();