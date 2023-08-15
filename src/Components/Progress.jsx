import React, { useEffect, useState } from 'react';


const Progress = ({ value = 0 , onComplete = () => {} }) => {
    const [percent, setPercent] = useState(value);

    useEffect(() => {
        setPercent(Math.min(100, Math.max(value, 0)));

        if(percent >= 100){
            onComplete();
        }
    }, [value])

    return (
        <div className='progressBar'>
            <span style={{ color: percent >= 49 ? "white" : "black"}} >{percent.toFixed()}% </span>
            <div
                style={{ width: `${percent}%` }}
            />
        </div>
    )
}

export default Progress