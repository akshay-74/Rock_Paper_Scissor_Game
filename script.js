const choices = { 'r': '🪨 Rock', 'p': '📃 Paper', 's': '✂️ Scissors' };
function playGame(userChoice) {
    const computerChoice = ['r', 'p', 's'][Math.floor(Math.random() * 3)];
    document.getElementById("user-choice").textContent = `Your Choice: ${choices[userChoice]}`;
    document.getElementById("computer-choice").textContent = `My Choice: ${choices[computerChoice]}`;
    
    if (userChoice === computerChoice) {
        document.getElementById("result").textContent = "It's a Tie! 🤝";
    } else if (
        (userChoice === 'r' && computerChoice === 's') ||
        (userChoice === 's' && computerChoice === 'p') ||
        (userChoice === 'p' && computerChoice === 'r')
    ) {
        document.getElementById("result").textContent = "You Win! 🎉";
    } else {
        document.getElementById("result").textContent = "You Lose! 😢";
    }
}