let your_score = 0, computer_score = 0, draw_matches = 0;

const choices = ["rock", "paper", "scissors"];

// -- computer choices
const get_computer_choice = () => choices[Math.floor(Math.random() * choices.length)];

// -- game rounds
const play_round = (your_choice) => {
  computer_choice = get_computer_choice();

  if(!your_choice) {
    return "Invalid choice! try again."
  }

  if(your_choice === computer_choice) {
    draw_matches++;
    return `It's a draw! You both chose "${your_choice}".`;
  }
  
  // --main logic
  const win_rule = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }
  
  if(win_rule[your_choice] === computer_choice) {
    your_score++;
    return `You win! your "${your_choice}" beats computer's "${computer_choice}".`; 
  }
  else {
    computer_score++;
    return `You Lose! computer's "${computer_choice}" beats your "${your_choice}".`;
  }
}

const button_config = [
  {
    text: "Rock",
    action: () => play_round("rock"),
  },
  {
    text: "Paper",
    action: () => play_round("paper"),
  },
  {
    text: "Scissors",
    action: () => play_round("scissors")
  }
]

const body = document.querySelector("body");

button_config.forEach((config) => {
  const button = document.createElement("button");
  button.textContent = config.text;
  button.onclick = config.action;
  body.append(button);
})















/*
// -- user choices
const get_your_choice = (input) => {
  if(input === 'rock') return choices[0];
  else if(input === 'paper') return choices[1];
  else if(input === 'scissors') return choices[2];
}
*/

/*
// -- main and input function
const play_game = () => {  
  let i = 0;
  while(i < 5) {
    let input = prompt("Enter Choice (rock, paper, scissors): ").trim().toLowerCase();

    let computer_select = get_computer_choice();
    let your_select = get_your_choice(input);

    let result = play_round(your_select, computer_select);
    console.log(result);
    i++;
  }

  console.log(`Your Score: ${your_score}`);
  console.log(`Computer Score: ${computer_score}`);
  console.log(`Draw Matches: ${draw_matches}`);
  play_game();
}
*/