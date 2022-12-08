import '../style/card.css';
import '../style/utils.css';
import { useState } from 'react';
const Card = (props) => {
    const [dark, setDark] = useState(true);
    return (
       <div className="card-wrapper"
       style={{
        backgroundColor: dark ? '#181818' : '#5cb8e4',
        color: dark ? '#5cb8e4' : '#181818'
       }}>
            <div className='card-header'>
                <h1>{props.title}</h1>
            </div>
            <div className='card-body'>
                <p>{props.subTitle}</p>
                <p>{props.disc}</p>
            </div>
            <button
                style={{
                    backgroundColor: dark ? '#181818' : '#5cb8e4',
                    color: dark ? '#5cb8e4' : '#181818',
                    border: dark ? '5px solid #5cb8e4' : '5px solid #181818',
                    borderRadius: '5px'
                }}
                onClick={() =>{
                    setDark(!dark)
                }}
            >{dark ? 'Dark Mode' : 'Light Mode'}</button>
       </div>
    )
}

export default Card;