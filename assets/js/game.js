var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roberto", "Amy Andriod", "Robo Trouble"];
var enemyHealth = 50;
var enemyAttack = 1;

var fight = function fight(enemyNames) {
  while (enemyHealth > 0) {
    var promptFight = window.prompt(
      "Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."
    );
    if (promptFight === "fight" || promptFight === "FIGHT") {
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyNames +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName +
          "attacked" +
          enemyNames +
          ". " +
          enemyNames +
          "Now has" +
          enemyHealth +
          " health remaining."
      );
      if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
      } else {
        window.alert(
          enemyNames + " still has " + enemyHealth + " health left."
        );
      }
      playerHealth = playerHealth - enemyAttack;
      console.log(
        enemyNames +
          " attacked " +
          playerName +
          ". " +
          playerName +
          " now has " +
          playerHealth +
          " health remaining."
      );

      if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
      } else {
        window.alert(
          playerName + " still has " + playerHealth + " health left."
        );
      }
    } else if (promptFight === "skip" || promptFight === "SKIP") {
      window.alert(playerName + " has chosen to skip the fight!");
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        playerMoney = playerMoney - 2;
      } else {
        fight();
      }
    } else {
      window.alert("You need to choose a valid option. Try again!");
    }
  }
};
for (var i = 0; i < enemyNames.length; i++) {
  var pickedEnemyName = enemyNames[i];
  enemyHealth = 50;
  debugger;
  fight(pickedEnemyName);
}
fight();
