let you = 0, computer = 0, draw = 0;

const choices = ["rock", "paper", "scissors"];

// -- computer choices
const get_computer_choice = () => choices[Math.floor(Math.random() * choices.length)];

// -- game rounds
const play_round = (your_choice) => {
  const computer_choice = get_computer_choice();

  if (!your_choice) {
    return "Invalid choice! try again."
  }

  if (your_choice === computer_choice) {
    draw++;
    document.querySelector('#score-Draw').textContent = draw;
    return `It's a draw! You both chose "${your_choice}".`;
  }

  // --main logic
  const win_rule = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  }

  if (win_rule[your_choice] === computer_choice) {
    you++;
    document.querySelector('#score-You').textContent = you;
    return `You win! your "${your_choice}" beats computer's "${computer_choice}".`;
  }
  else {
    computer++;
    document.querySelector('#score-Computer').textContent = computer;
    return `You Lose! computer's "${computer_choice}" beats your "${your_choice}".`;
  }
}

// -- buttons and result
const div_button = document.querySelector("#js-buttons");
const result = document.querySelector("#js-result");

const button_config = [
  {
    text: "./assets/rock.png",
    action: () => {
      result.textContent = play_round("rock");
    },
  },
  {
    text: "assets/paper.png",
    action: () => {
      result.textContent = play_round("paper");
    },
  },
  {
    text: "assets/scissors.png",
    action: () => {
      result.textContent = play_round("scissors");
    },
  }
]

button_config.forEach((config) => {
  const button = document.createElement("div");
  button.classList.add("button");

  const img = document.createElement('img');
  img.classList.add("images")
  img.src = `${config.text}`;
  img.alt = 'Button Icon';

  button.textContent = ' ';

  button.appendChild(img);
  button.onclick = config.action;
  div_button.appendChild(button);
})

// -- score
const div_score = document.querySelector("#js-score");
const result_config = ["You", "Computer", "Draw"];

result_config.forEach((config) => {
  // -- score paragraph
  const para = document.createElement("p");
  para.classList.add("score");

  para.textContent = `${config}: `;

  // -- score span
  const span = document.createElement("span");
  span.setAttribute("id", `score-${config}`);
  span.textContent = 0

  para.appendChild(span);
  div_score.appendChild(para);
})



// new code update-01

const rock_paper_scissors = {
  player_score: 0,
  computer_score: 0,
  draw: 0,
  playRound(player_choice) {
    const computer_choice = get_computer_choice();

    if (!player_choice) {
      return "Invalid choice! try again."
    }

    if (player_choice === computer_choice) {
      this.draw++;
      return `It's a draw! You both chose "${player_choice}".`;
    }

    // --main logic
    const win_rule = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
    }

    if (win_rule[player_choice] === computer_choice) {
      this.player_score++;
      return `You win! your "${player_choice}" beats computer's "${computer_choice}".`;
    }
    else {
      this.computer_score++;
      return `You Lose! computer's "${computer_choice}" beats your "${player_choice}".`;
    }
  },

  get_winning_player() {
    if(this.player_score == this.computer_score) {
      return "It's a draw match."
    }
    const result = (this.player_score > this.computer_score) ? "You Win!" : "Computer Win!";
    return result;
  },

  reset() {
    this.player_score = 0;
    this.computer_score = 0;
  }
}















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