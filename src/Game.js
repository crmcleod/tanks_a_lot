import {useEffect, useState} from 'react'
import Ground from './Ground'
import HealthBar from './Health'
import Tank from './Tank'

const Game = () => {

    const [gameTick, setGameTick] = useState(true)
    useEffect(() => {
        setTimeout(() => { setGameTick(!gameTick)}, 15)
        setMyHealth(myHealth-0.1)
        if(theirHealth <= 0 && myHealth > 0) {
            alert('You won!')
            setMyHealth(100);
            setTheirHealth(100);
        } else 
        if(theirHealth > 0 && myHealth <= 0) {
            alert('You have been dominated ☠️')
            setMyHealth(100);
            setTheirHealth(100);
        }
    }, [gameTick])
    const [myHealth, setMyHealth] = useState(100)
    const [theirHealth, setTheirHealth] = useState(100)
    const [bullets, setBullets] = useState([])
    const [yourBullets, setYourBullets] = useState([])
    return(
        <div id='game-area'>
            <HealthBar id={'you'} currentHealth={myHealth}/>
            <HealthBar id={'aggressor'} currentHealth={theirHealth}/>
            <Tank gameTick={gameTick} id={'your-tank'} yourBullets={yourBullets} setYourBullets={setYourBullets} theirHealth={theirHealth} setTheirHealth={setTheirHealth}/>
            <Tank id={'their-tank'} gameTick={gameTick} bullets={bullets} setBullets={setBullets}/>
            <Ground />
        </div>
    )
}

export default Game