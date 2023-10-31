const info = document.querySelector('.info')
const cellules =  document.querySelectorAll('.cell')

let verouillage =  true
let joueurEncours = "X"

info.innerText = `Au tour de ${joueurEncours}`

const alignementsGagnants = [
     [0, 1, 2],
     [3, 4, 5],
     [6, 7, 8],
     [0, 3, 6],
     [1, 4, 7],
     [2, 5, 8],
     [0, 4, 8],
     [2, 4, 6]
]

let partieEncours = ["","","","","","","","",""]

cellules.forEach(cell => {
    cell.addEventListener('click', clickSurCase)
})


function clickSurCase(e){
    const caseClique = e.target
    const caseIndex = caseClique.dataset.index

    if(partieEncours[caseIndex] !== "" || !verouillage){
        return
    }
    partieEncours[caseIndex] = joueurEncours
    caseClique.innerHTML = joueurEncours
    validationResultats()

}



function validationResultats(){

    let finDePartie = false

    for (let i = 0; i < alignementsGagnants.length; i++) {

        const checkWin = alignementsGagnants[i]
        let a = partieEncours[checkWin[0]]
        let b = partieEncours[checkWin[1]]
        let c = partieEncours[checkWin[2]]

        if (a === '' || b === '' || c === '') {
            continue
        }

        if(a === b && b === c){
            finDePartie = true
            break;
        }
    }

    if(finDePartie){
        info.innerText = `Le joueur ${joueurEncours} a gagné !`
        verouillage = false
        return
    }
    let matchNul = !partieEncours.includes('')
    if(matchNul){
        info.innerHTML = 'Match Nul !'
        verouillage = false
        return
    }
    changementDejoueur()
}

function changementDejoueur(){
     joueurEncours = joueurEncours === "X" ? "O" : "X"
     info.innerText = `Au tour de ${joueurEncours}`
}






















