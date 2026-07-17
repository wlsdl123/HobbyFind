const choiceAButton = document.getElementById('choiceA');
const choiceBButton = document.getElementById('choiceB');
const roundNumber = document.getElementById('round-number');
const matchInfo = document.getElementById('match-info');
const resultSection = document.getElementById('result');
const winnerText = document.getElementById('winner');
const restartButton = document.getElementById('restart');
const playAgainButton = document.getElementById('play-again');

const candidates = [
  { name: '강아지', image: 'https://source.unsplash.com/600x400/?dog' },
  { name: '고양이', image: 'https://source.unsplash.com/600x400/?cat' },
  { name: '햄스터', image: 'https://source.unsplash.com/600x400/?hamster' },
  { name: '토끼', image: 'https://source.unsplash.com/600x400/?rabbit' },
  { name: '판다', image: 'https://source.unsplash.com/600x400/?panda' },
  { name: '기린', image: 'https://source.unsplash.com/600x400/?giraffe' },
  { name: '코알라', image: 'https://source.unsplash.com/600x400/?koala' },
  { name: '돌고래', image: 'https://source.unsplash.com/600x400/?dolphin' }
];

let currentRound = [];
let nextRound = [];
let currentMatchIndex = 0;
let currentMatch = [];
let totalMatches = 0;

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(item => item.value);
}

function createBracket() {
  currentRound = shuffle(candidates).slice(0, 8);
  nextRound = [];
  currentMatchIndex = 0;
  currentMatch = [];
  resultSection.hidden = true;
  totalMatches = currentRound.length / 2;
  roundNumber.textContent = `${getRoundLabel(currentRound.length)} 라운드`;
  matchInfo.textContent = `매치 1 / ${totalMatches}`;
}

function renderMatch() {
  if (currentRound.length === 1) {
    const finalWinner = currentRound[0];
    winnerText.textContent = finalWinner.name;
    resultSection.hidden = false;
    return;
  }

  currentMatch = [
    currentRound[currentMatchIndex * 2],
    currentRound[currentMatchIndex * 2 + 1]
  ];
  renderCandidate(choiceAButton, currentMatch[0]);
  renderCandidate(choiceBButton, currentMatch[1]);
  roundNumber.textContent = `${getRoundLabel(currentRound.length)} 라운드`;
  matchInfo.textContent = `매치 ${currentMatchIndex + 1} / ${totalMatches}`;
}

function renderCandidate(button, candidate) {
  button.innerHTML = `
    <img class="candidate__image" src="${candidate.image}" alt="${candidate.name}">
    <div class="candidate__label">${candidate.name}</div>
  `;
}

function selectWinner(choice) {
  const winner = choice === 'A' ? currentMatch[0] : currentMatch[1];
  nextRound.push(winner);
  currentMatchIndex += 1;

  if (currentMatchIndex >= totalMatches) {
    currentRound = nextRound;
    nextRound = [];
    currentMatchIndex = 0;
    totalMatches = currentRound.length / 2;
  }

  renderMatch();
}

function getRoundLabel(count) {
  if (count === 2) return '결승';
  if (count === 4) return '4강';
  if (count === 8) return '8강';
  return `${count}강`;
}

function resetGame() {
  createBracket();
  renderMatch();
}

choiceAButton.addEventListener('click', () => selectWinner('A'));
choiceBButton.addEventListener('click', () => selectWinner('B'));
restartButton.addEventListener('click', resetGame);
playAgainButton.addEventListener('click', resetGame);

resetGame();
