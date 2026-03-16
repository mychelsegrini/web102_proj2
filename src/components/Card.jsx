import {useState} from 'react';

const Card = ({cards, randomArray}) => {
    const [k, setK] = useState(0);
    const [flipped, setFlipped] = useState(false);
    const [lastCard, setLastCard] = useState(false);
    const [firstCard, setFirstCard] = useState(true);
    const [guess, setGuess] = useState("");
    const [output, setOutput] = useState("");

    const handleClick = () => {
        setFlipped(!flipped);
    };

    const movePrevious = () => {
        if(flipped){
            setFlipped(false);
            if(k == (0)){
                setTimeout(() => {setK(cards.length - 1)}, 250);
            } else setTimeout(() => {setK(k - 1)}, 250);
        } else {
             if(k > 0){
                setK(k - 1);
                setLastCard(false);
            } else setFirstCard(true);
        }

        setOutput("");
        setGuess("");
    }

    const moveNext = () => {
        if(flipped){
            setFlipped(false);
            if(k == (cards.length - 1)){
                setTimeout(() => {setK(0)}, 250);
            } else setTimeout(() => {setK(k + 1)}, 250);
        } else {
             if(k < (cards.length - 1)) {
                setK(k + 1);
                setFirstCard(false);
             } else setLastCard(true);
             
        }

         setOutput("");
         setGuess("");
    }

    const handleInput = (e) => setGuess(e.target.value);
    const testInput = (e) => {
        e.preventDefault();
        if(guess == cards[randomArray[k]].ans){
            setOutput("Correct!");
        } else setOutput("Wrong :(");
    };

    return (
        <div className='container'>
            <div className= 'flip-scene'>
                <div className = {`card ${flipped? 'is-flipped' : ''}`} onClick={handleClick}>
                    <div className="card-face card-front">
                        {cards[randomArray[k]].question}
                    </div>

                    <div className="card-face card-back">
                        {cards[randomArray[k]].ans}
                    </div>
                </div>
            </div>

            <div className="form-container">
                <form onSubmit={testInput}>
                    <input className="thick-input" type="text" onChange={handleInput} value={guess}  placeholder="Enter your guess..."/>
                    <input type="submit" className="beautiful-submit"/>
                </form>
               
            </div>

            <div>
                <button onClick={movePrevious} className = {`button ${firstCard? 'deactivated' : 'activated'}`}>Previous</button>
                <button onClick={moveNext} className = {`button ${lastCard? 'deactivated' : 'activated'}`}>Next</button>
            </div>

            <h3>{output}</h3>
        </div>
    )
}

export default Card;