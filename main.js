const btnLuck = document.querySelector("#btnLuck")
const btnReset = document.querySelector("#btnReset")
const screenOne = document.querySelector(".screenOne")
const screenTwo =  document.querySelector(".screenTwo")
const pCard = document.querySelector(".card p")


function luckyClick () {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}

function resetClick () {
    screenOne.classList.toggle("hide")
    screenTwo.classList.toggle("hide")
}

btnLuck.addEventListener('click', luckyClick)
btnReset.addEventListener('click', resetClick)



let luckyPhrases = [
    "O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.",
    "A perseverança é a mãe da boa sorte.",
    "Sorte é estar pronto quando a oportunidade vem.",
    "A sorte favorece a mente bem preparada.",
    "Quanto mais eu treino, mais sorte eu tenho.",
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
]

function randomPhrase(phrases) {
    let index = Math.floor(Math.random() * phrases.length)
    return phrases[index]
}

document.querySelector(".card p").innerText = randomPhrase(luckyPhrases)