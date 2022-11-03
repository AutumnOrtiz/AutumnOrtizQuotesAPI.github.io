import './Activity.css'
import {useEffect, useState} from 'react';

function Activities() { 
    const [activities, setActivities] = useState('');
    const [x, setX] = useState('');

    useEffect(() => {
        const getData = async () => {
            const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
            const response = await fetch(url);
            const json = await response.json();
            const randomQuote = json.quotes[Math.round(Math.random() * json.quotes.length)].quote;
            console.log(randomQuote);
            setActivities(randomQuote);
        }

        getData();
    }, [x]);

    return (
    <>
     
            <div className='quote'>
                <h1>{activities}</h1>
                <button onClick={ () => setX(x + 1)}>Load Another</button>     
            </div>
    </>   
    );
};

export default Activities;