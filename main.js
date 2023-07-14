const prompt = require("prompt-sync")();

let choice;

do {
  choice = menu();
  if (choice == 1) {
    let cpu = Math.floor(Math.random() * 3);
    let me = inputMe();

    let ret = compare(cpu, me);
    console.log(ret);
  }
} while (choice != 2);

function compare(choice1, choice2) {
  if (choice1 == choice2) {
    return "Tie";
  } else if (
    (choice1 == 0 && choice2 == 1) ||
    (choice1 == 1 && choice2 == 2) ||
    (choice1 == 2 && choice2 == 0)
  ) {
    return "You wins";
  } else {
    return "You lose";
  }
}

function inputMe() {
  let ask = 48;
  do {
    ask = prompt("rock, paper or scissors? ").toLowerCase();

    switch (ask) {
      case "rock":
        return 0;
        break;
      case "paper":
        return 1;
        break;
      case "scissors":
        return 2;
        break;
      default:
        console.log("no no no!");
        break;
    }
  } while (ask < 0 || ask > 2);
}

function menu() {
  console.log(`1 - start`);
  console.log(`2 - exit`);
  let menuChoice = prompt(``).toLowerCase();
  return menuChoice;
}
