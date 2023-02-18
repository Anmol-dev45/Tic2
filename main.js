const gameBox = document.querySelectorAll('#game_board div')
const mssg = document.querySelector('#mssg')
const reset = document.querySelector('#reset')
const endMssg = document.querySelector('#endmssg')
let currentPlayer = 'X'
let round = 0
function playerChanger(player) {
    if (player == 'X') {
        return 'O'
    }
    else {
        return 'X'
    }
}
let winnerfound = false


const conditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]
function checkwinner(player) {
    let winner = false

    for (let i = 0; i < 8; i++) {
        let flag = 0
        for (let j = 0; j < 3; j++) {
            if (document.getElementById(`${conditions[i][j]}`).textContent == player) {
                flag++
            }
        }
        if (flag === 3) {
            for (let j = 0; j < 3; j++) {
                document.getElementById(`${conditions[i][j]}`).style.color = "red"

            }
            winner = true
            break;

        }
    }
    return winner
}
const Reset = () => {
    round = 0
    currentPlayer = 'X'
    endMssg.style.color = "white"
    mssg.textContent = `Start with player X`
    endMssg.textContent = `Play the Game`
    gameBox.forEach(box => {
        box.textContent = ''
    })
    winnerfound = false
}
const Game = (e) => {
    if (winnerfound) {
        return
    }
    if (e.target.textContent) {
        return
    }
    e.target.textContent = currentPlayer
    if (checkwinner("X") || checkwinner("O")) {
        endMssg.style.color = "red"
        endMssg.textContent = `Player ${currentPlayer} wins the game`
        mssg.textContent = `Click restart to start new game`
        winnerfound = true
        return

    }
    round++
    if (round === 9) {
        endMssg.style.color = "yellow."
        endMssg.textContent = `The game ends as a draw`
        mssg.textContent = `Click restart button to start new game`


    }
    e.target.style.color = "rgb(187, 249, 86)"
    currentPlayer = playerChanger(currentPlayer)
    mssg.textContent = `Player ${currentPlayer} turn`

}
reset.addEventListener('click', Reset)

gameBox.forEach(box => {

    addEventListener('click', (e) => Game(e))
})