const game = document.querySelector('.game');
let player = 'X';
let gameOver = false;

function checkGameOver() {
    let rowWin = false;
    let colWin = false;
    let diagonalWin = false;

    // Check rows and columns for a win
    for (let i = 0; i < 3; i++) {
        rowWin = game.children[i * 3].textContent === player &&
            game.children[i * 3 + 1].textContent === player &&
            game.children[i * 3 + 2].textContent === player;

        colWin = game.children[i].textContent === player &&
            game.children[i + 3].textContent === player &&
            game.children[i + 6].textContent === player;

        if (rowWin || colWin) {
            gameOver = true;
            break;
        }
    }

    // Check diagonals for a win
    diagonalWin = game.children[0].textContent === player &&
        game.children[4].textContent === player &&
        game.children[8].textContent === player;

    diagonalWin = diagonalWin || (
        game.children[2].textContent === player &&
        game.children[4].textContent === player &&
        game.children[6].textContent === player
    );

    if (diagonalWin) {
        gameOver = true;
    }
}

function boxClicked(box) {
    if (!gameOver && box.textContent === '') {
        box.textContent = player;
        checkGameOver();

        if (!gameOver) {
            player = player === 'X' ? 'O' : 'X';
        }
    }
}

for (let i = 0; i < 9; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('click', () => boxClicked(box));
    game.appendChild(box);
}