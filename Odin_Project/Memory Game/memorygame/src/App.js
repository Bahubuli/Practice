
import { useState ,useEffect} from 'react';
import './App.css';



function App() {

    const localStorageHighScore = JSON.parse(
        localStorage.getItem('highScore')
    )

    const [currentScore,setCurrentScore] = useState(0);
    const [highScore,setHighScore] = useState(localStorage.getItem('highScore')!==null?localStorageHighScore:0);


    const [chars,setChars] = useState([
        {
            name:"John Snow",
            photoURL:'./pics/john.webp',
            alive:true
         },

        {
            name:"Arya Stark",
            photoURL:'./pics/arya.webp',
            alive:true
        },
        {
            name:"Daenerys Targaryen",
            photoURL:'./pics/danny.webp',
            alive:true
        },
        {
            name:"Euron",
            photoURL:'./pics/euron.webp',
            alive:true
        },
        {
            name:"Grey Worm",
            photoURL:"./pics/grey.webp",
            alive:true
        },
        {
            name:"High Sparrow",
            photoURL:'./pics/highSparrow.webp',
            alive:true
        },
        {
            name:"The Hound",
            photoURL:'./pics/hound.webp',
            alive:true
        },
        {
            name:"Jaime lenister",
            photoURL:'./pics/jaime.webp',
            alive:true
        },
        {
            name:"Jaqen H ghar",
            photoURL:'./pics/jaqen.webp',
            alive:true
        },
        {
            name:"Joffery",
            photoURL:'./pics/joffery.webp',
            alive:true
        },
        {
            name:"Khal Drogo",
            photoURL:'./pics/khal.webp',
            alive:true
        },
        {
            name:'LittleFinger',
            photoURL:'./pics/littlefinter.webp',
            alive:true
        },
        {
            name:"Ned Stark",
            photoURL:'./pics/ned.webp',
            alive:true
        },
        {
            name:"Rob Stark",
            photoURL:'./pics/rob.webp',
            alive:true
        },
        {
            name:'Sansa Stark',
            photoURL:'./pics/sansa.webp',
            alive:true
        },
        {
            name:'Theon',
            photoURL:'./pics/theon.webp',
            alive:true
        },
        {
            name:"Tryion Lenister",
            photoURL:'./pics/tryion.webp',
            alive:true
        },
        {
            name:"Tywin Lenister",
            photoURL:'./pics/tywin.webp',
            alive:true
        },
        {
            name:'Lord Varys',
            photoURL:'./pics/varys.webp',
            alive:true
        },
        {
            name:'Simp Jorah',
            photoURL:'./pics/jorah.webp',
            alive:true
        },
        {
            name:'Cersei',
            photoURL:'./pics/cersei.webp',
            alive:true
        }

    ])



    function shuffle(array)
    {
        let idx = array.length, ridx;

        while(idx!=0)
        {
            ridx = Math.floor(Math.random()*idx);
            idx--;

            [array[idx],array[ridx]] = [array[ridx],array[idx]]
        }
        return array;
    }



    async function  handleClick(index)
    {
        let inc=0;
        const shufflechars = [...chars]
        if(shufflechars[index].alive)
        {
            shufflechars[index].alive = false;
            inc++;
        }
        else
        {
            shufflechars.forEach(s=>s.alive=true)
            inc=0;
            setCurrentScore(0);
        }
        setChars(shufflechars);
        setCurrentScore((currentScore)=>currentScore+inc);

    }

    shuffle(chars);

    useEffect(()=>{
        if(currentScore>highScore)
        {
            setHighScore((highScore)=>currentScore)
            localStorage.setItem('highScore',JSON.stringify(currentScore))
        }
    },[currentScore])

  return (
    <div className="container">
          <h1>Game of Thrones</h1>
          <span>You are imposter tap to kill if you tap on dead person you will get caught and killed</span>
          <div className = "scores">
            <p className = "current-score">Current Score : {currentScore}</p>
            <p className = "high-score">High Score : {highScore}</p>
          </div>

          <div className= "board">
                {chars.map((char,index)=>(
                        <div className ="char" key = {char.name} onClick ={()=>{handleClick(index)}}>
                            <img className= "dp" src = {require(`${char.photoURL}`)} />
                            <span className = "name">{char.name}</span>
                        </div>
                ))}
          </div>
    </div>
  );
}

export default App;
