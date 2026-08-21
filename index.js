let rounds = 1;

const choices = ["rock", "paper", "scissors"];

// -- button configs 
const button_config = [
  {
    text: "assets/rock.png",
    action: "rock"
  },
  {
    text: "assets/paper.png",
    action: "paper"
  },
  {
    text: "assets/scissors.png",
    action: "scissors"
  }
]

// -- computer choices
const get_computer_choice = () => choices[Math.floor(Math.random() * choices.length)];

// -- rock-paper-scissors object
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
    if (this.player_score == this.computer_score) {
      return "It's a draw match."
    }
    const result = (this.player_score > this.computer_score) ? "You Win!" : "Computer Win!";
    return result;
  },

  reset() {
    this.player_score = 0;
    this.computer_score = 0;
    this.draw = 0;
  }
}

// -- buttons and result and score
const div_button = document.querySelector("#js-buttons");
const result = document.querySelector("#js-result");

const div_score = document.querySelector("#js-score");
const score_para = document.createElement("div");
score_para.classList.add("score-para");

const rounds_div = document.createElement("div");
rounds_div.classList.add("rounds");
rounds_div.textContent = "0 / 5"

const reset_div = document.querySelector("#js-reset");

// -- generate buttons
const generate_buttons = () => {
  score();
  button_config.forEach((config) => {
    const button = document.createElement("div");
    button.classList.add("button");

    const img = document.createElement('img');
    img.classList.add("images")
    img.src = `${config.text}`;
    img.alt = 'Button Icon';

    button.textContent = ' ';

    button.appendChild(img);
    button.addEventListener("click", () => {
      if (rounds <= 5) {
        result.textContent = rock_paper_scissors.playRound(config.action);
        rounds_div.textContent = `${rounds} / 5`
        rounds++
        score();

        if (rounds > 5) {
          result.textContent = `Game Over! ${rock_paper_scissors.get_winning_player()}`;
        }
      }
    })
    div_button.appendChild(button);
  })
}

// -- score
const score = () => {
  score_para.textContent = `
  You: ${rock_paper_scissors.player_score} | 
  Computer: ${rock_paper_scissors.computer_score} |
  Draw: ${rock_paper_scissors.draw}
  `
  div_score.append(score_para, rounds_div);
}

// -- reset
const reset = () => {
  const reset_btn = document.createElement("button");
  reset_btn.classList.add("reset-btn");
  reset_btn.textContent = "Reset";

  reset_btn.addEventListener('click', () => {
    rock_paper_scissors.reset();
    rounds = 1;         
    
    rounds_div.textContent = "0 / 5";
    result.textContent = "Strength is relative, victory is temporary.";
    score(); 
  })
  reset_div.appendChild(reset_btn);
}

generate_buttons();
reset();
