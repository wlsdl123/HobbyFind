const choiceAButton = document.getElementById('choiceA');
const choiceBButton = document.getElementById('choiceB');
const roundNumber = document.getElementById('round-number');
const matchInfo = document.getElementById('match-info');
const resultSection = document.getElementById('result');
const winnerText = document.getElementById('winner');
const restartButton = document.getElementById('restart');
const playAgainButton = document.getElementById('play-again');

const candidates = [
  { name: '강아지', image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80' },
  { name: '고양이', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&q=80' },
  { name: '햄스터', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=600&q=80' },
  { name: '토끼', image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fst2.depositphotos.com%2F1821481%2F5314%2Fi%2F950%2Fdepositphotos_53140785-stock-photo-bunny-with-big-ears.jpg&type=a340' },
  { name: '판다', image: 'https://search.pstatic.net/common/?src=http://blogfiles.naver.net/MjAyNjA2MTFfMTM2/MDAxNzgxMTQ4ODEzMDM3.nIvupKyURTfqahfC3Y2YnDe07mPBtpXxnfbMqNC921wg.WeMD_CTp2p46nsR3bf2k3LB0VVHdhPbN5oTZyoocsmQg.PNG/900_file_000000003.JPG&type=a340' },
  { name: '기린', image: 'https://search.pstatic.net/common/?src=http://blogfiles.naver.net/MjAyNjAyMjNfOTYg/MDAxNzcxODQ3MTIxNTQ4.ouqRbus2dnj96VpeIhvMEtQ0ZzZh7e4tI1362E9eQpgg.uOBwP8J0_8cGA8O5anTonpKZHXOz2dxgwNeMi0uQKGgg.JPEG/large.jpg&type=a340' },
  { name: '코알라', image: 'https://search.pstatic.net/sunny/?src=https://st.depositphotos.com/1036149/4730/i/950/depositphotos_47309739-stock-photo-fun-koala.jpg&type=a340' },
  { name: '돌고래', image: 'https://search.pstatic.net/sunny/?src=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F29147814%2Fpexels-photo-29147814.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26h%3D627%26fit%3Dcrop%26w%3D1200&type=a340' }
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
