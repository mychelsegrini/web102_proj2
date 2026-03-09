import {useState} from 'react';



const Card = ({cards}) => {
    const [k, setK] = useState(0);
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setFlipped(!flipped);
        console.log("test");
    };

    const movePrevious = () => {
        if(flipped){
            setFlipped(false);
            if(k == (0)){
                setTimeout(() => {setK(cards.length - 1)}, 250);
            } else setTimeout(() => {setK(k - 1)}, 250);
        } else {
             if(k == 0){
                setK(cards.length - 1);
            } else setK(k - 1);
        }
    }

    const moveNext = () => {
        if(flipped){
            setFlipped(false);
            if(k == (cards.length - 1)){
                setTimeout(() => {setK(0)}, 250);
            } else setTimeout(() => {setK(k + 1)}, 250);
        } else {
             if(k == (cards.length - 1)){
                setK(0);
            } else setK(k + 1);
        }
    }

    return (
        <div className='container'>
            <div className= 'flip-scene'>
                <div className = {`card ${flipped? 'is-flipped' : ''}`} onClick={handleClick}>
                    <div className="card-face card-front">
                        {cards[k].question}
                    </div>

                    <div className="card-face card-back">
                        {cards[k].ans}
                    </div>
                </div>
            </div>

            <div>
                <button onClick={movePrevious}>Previous</button>
                <button onClick={moveNext}>Next</button>
            </div>
        </div>
    )
}

export default Card;