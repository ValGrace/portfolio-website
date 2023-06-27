import { Game } from "./Gamearray";
import { createElement, useRef, useState } from "react";
import cardCover from './img_0.jpg'
import cardFlip from './white.png'
const Memory = () => {
    Game.sort(() => 0.5 - Math.random())
    // const result = useRef()
    const grid = document.querySelector('.grid')
    const imgRef = useRef()
    const [gameState, setGameState] = useState('')
    const [result, setResult] = useState('')

    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []

    for (let i = 0; i < Game.length; i++){
        const card =document.createElement('img')
            card.setAttribute('src', cardCover)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
    } 

    function flipCard() {
       let cardId = imgRef.current.id
       cardsChosen.push(Game[cardId].name)
       cardsChosenIds.push(cardId)
       imgRef.current.src = Game[cardId].img
       if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
       }
       console.log(imgRef.current)
    }

    function checkForMatch(){
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenIds[0]
        const optionTwoId = cardsChosenIds[1]
        if (optionOneId === optionTwoId) {
            setGameState('You have clicked the same image')
            cards[optionOneId].setAttribute('src', cardCover)
            cards[optionTwoId].setAttribute('src', cardCover)
        } else if (cardsChosen[0] === cardsChosen[1]){
            setGameState('You have found a match')
            cards[optionOneId].setAttribute('src', cardFlip)
            cards[optionOneId].removeEventListener('click', flipCard)

            cards[optionTwoId].setAttribute('src', cardFlip)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }else {
            cards[optionOneId].setAttribute('src', cardFlip)
            cards[optionTwoId].setAttribute('src', cardFlip)
            setGameState('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenIds = []
        setResult(cardsWon.length)
        if (cardsWon.lenth === Game.length / 2) {
            setResult('Congratulations, you have won ')
        }
    }
    return (
        <>
        <h3>Score: <span id="result" > {result }</span></h3>
        <h4>{gameState }</h4>
        <div className="grid">
            
            {/* <div className="card" onClick={flipCard} >
                {Game.map((e) => {
                    return (
                    <img src={cardCover} alt="blank card" data-id={e.id} id={e.id} ref={imgRef}/>
                    )
                })}
                
            </div> */}
        </div>
        </>
    )
}

export default Memory