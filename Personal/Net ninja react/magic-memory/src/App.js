/*
1. create array of objects of images
2. shuffle it make 2 copies , attach random id
3. setCards to that shuffled array
4. set number of turns ,choice1,choice2 as null
5. handleChoice if choice1 is already picked assigned the
   clicked card to choice2
6. now to compare two choices make a useEffect dependent on
   both the choice so pass choice1, and choice 2 and dependency array
7. if both the cards are same then change their status in the object
   array as matched + reSetturn
8. if both the cards not matching then also change their state to null
   and resetTurn
9. use map to create each and every card in the grid
10. use a SingleCard component for creating the card
11. pass various props such as, handleChoice, matchedstatus, disabled,flipped, and card itself

*/








import './App.css';

import './components/SingleCard'

import { useState , useEffect} from 'react';
import SingleCard from './components/SingleCard';
const cardImages = [

    { "src": "/img/helmet-1.png",matched:false },
    { "src": "/img/potion-1.png",matched:false },
    { "src": "/img/ring-1.png",matched:false },
    { "src": "/img/scroll-1.png",matched:false },
    { "src": "/img/shield-1.png",matched:false },
    { "src": "/img/sword-1.png",matched:false }
]

function App() {

    //shuffle cards

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const shuffleCards = () => {

        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map(card => ({ ...card, id: Math.random() }))

        setCards(shuffledCards);
        setTurns(0);
    }

    //handle a choice

    const handleChoice = (card) => {

        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

     }

    // starting the game automatically in the start
    //
    useEffect(() => {
        shuffleCards();
        setChoiceOne(null);
        setChoiceTwo(null);
     },[])

    //Compare 2 selected cards
    useEffect(() => {



        if (choiceOne && choiceTwo)
        {
            setDisabled(true);
            if (choiceOne.src === choiceTwo.src)
            {
                setCards(prevCards => {
                    return prevCards.map(card => {

                        if (card.src === choiceOne.src)
                        {
                            return { ...card, matched: true }
                        }
                        else
                        {
                            return card
                        }

                     })
                 })
                console.log("those two cards are matching")
                resetTurn();
            }
            else
            {
                console.log("those cards don't match");
               setTimeout(()=> resetTurn(),1000);
            }
        }

     },[choiceOne,choiceTwo])

    const resetTurn = () => {
        setChoiceOne(null);
        setChoiceTwo(null);
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false);
    }

    return(
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {cards.map(card => (

                    <SingleCard
                        key={card.id}
                        card={card}
                        handleChoice={handleChoice}
                        flipped={card === choiceOne || card === choiceTwo || card.matched}
                        disabled={disabled}
                    />

                ))}

            </div>
            <p>Turns: {turns}</p>
        </div>

  );
}

export default App;
