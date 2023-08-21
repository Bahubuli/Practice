import './SingleCard.css'

// create a div with dynamic class using the flipped prop
// use image as card.src
// handleClick on click

export default function SingleCard({ card, handleChoice,flipped, disabled }) {

    const handleClick = () => {
        if(!disabled)
        handleChoice(card);
    }

  return (
      <div className="card">

          <div className={flipped ? "flipped" :"" }>

              <img className="front" src={card.src} />
              <img className="back" src="/img/cover.png"

                  onClick={handleClick} />

          </div>

          SingleCard

      </div>
  )
}
