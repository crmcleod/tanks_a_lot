import { useEffect, useState } from "react";

const Tank = ({ id, gameTick, bullets, setBullets, yourBullets, theirHealth, setTheirHealth }) => {
    useEffect(() => {
        if (id === 'their-tank') {
            let newBullets = [...bullets, <span className="enemy-bullet" ></span>]
            if (newBullets.length > 20) {
                newBullets = newBullets.slice(0, 20)
            }
            setBullets(newBullets)
        }
    }, [gameTick])
 
    const shoot = (e) => {
        if (id === 'your-tank') {

            if (e.code.toLowerCase() === 'space') {

                yourBullets.push(<span className="your-bullet" ></span>)
                setTheirHealth(theirHealth-=1)
            } 
        }
    }
    useEffect(() => { window.addEventListener('keydown', shoot) }, [])
    return (
        <div className="tank" id={id}>
            { yourBullets && yourBullets.map(x => x)}
            {bullets && bullets.map(x=>x) } 
        </div>
    )
}

export default Tank;