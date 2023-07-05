import { Game } from "./Gamearray";
// import { useRef } from "react";

const MemoryGame = () => {
    Game.sort(() => 0.5 - Math.random())
    console.log(Game)
    const grid = document.querySelector(".grid")
    const resultDisplay = document.querySelector("#result")
    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    function createBoard(){
        for (let i = 0; i < Game.length; i++){
            const card = document.createElement("img")
            card.setAttribute("src", "")
            card.setAttribute("data-id", i)
            card.addEventListener("click", flipCard)
            grid.appendChild(card)
        }
    }

    function flipCard(){
        let cardId = this.getattribute("data-id")
        cardsChosen.push(Game[cardId].name)
        cardsChosenIds.push(cardId)
        this.setAttribute("src", Game[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId === optionTwoId){
            alert('You have clicked the same image')
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
        }else if (cardsChosen[0] ===cardsChosen[1]){
            alert('You have found a match!')
            cards[optionOneId].setAttribute('src', 'src/images/white.png')
            cards[optionTwoId].setAttribute('src', 'src/images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)

        }else{
            cards[optionOneId].setAttribute('src', 'src/images/blank.png')
            cards[optionTwoId].setAttribute('src', 'src/images/blank.png')
            alert('Sorry, try again!')  
        }
        cardsChosen = []
        cardsChosenIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length ===Game.length /2){
            resultDisplay.textContent = 'Congratulations, you have won'
        }

        console.log(cardsChosen)
        console.log(cardsWon)
    }
    createBoard()
    return (
        <>
        <div className="grid"></div>
        </>
    )
}

export default MemoryGame
 