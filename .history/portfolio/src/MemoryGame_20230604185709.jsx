import { Game } from "./Gamearray";
import {  useState } from "react";
import cardCover from './img_0.jpg'
import cardFlip from './white.png'
const Memory = () => {
    Game.sort(() => 0.5 - Math.random())
    // const result = useRef()
   
    // const imgRef = useRef()
    const [gameState, setGameState] = useState('')
    const [result, setResult] = useState('')

    let cardsChosen = []
    let cardsChosenIds = []
    let cardsWon = []
   
        for (let i =0; i <= Game.length; i++){

            const grid = document.querySelector('.grid')
            const card =document.createElement('img')
            card.setAttribute('src', 'src/images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
        // const children = Game.map((val) => (
        //     <img src={cardCover} alt="card cover" data-id={val} ref={imgRef} id={val} onClick={flipCard}/>
        // ))
   
    function flipCard() {
       let cardId = this.getAttribute('data-id')
       cardsChosen.push(Game[cardId].name)
       cardsChosenIds.push(cardId)
       this.setAttribute('src', Game[cardId].img)
       if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
       }
    //    console.log(imgRef.current)
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
           {/* {children} */}
           
        </div>
        </>
    )
}

export default Memory