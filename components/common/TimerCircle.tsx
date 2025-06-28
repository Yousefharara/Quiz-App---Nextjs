'use client'

import React, { useEffect, useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';


type Props = {
    duration: number;
    onComplete: () => void
}


const TimerCircle = ({duration, onComplete} : Props) => {

        const [secondsLeft, setSecondsLeft] = useState(duration);

        useEffect(() => {
            if(secondsLeft === 0) {
                onComplete();
                return;
            }
            const timer = setTimeout(() => {
                setSecondsLeft(prev => prev - 1)
            }, 1000);

            return () => clearTimeout(timer);
        }, [secondsLeft, onComplete])

        const percentage = (secondsLeft / duration) * 100;


    return (
    <div className="w-8 h-8">
      <CircularProgressbar
        value={percentage}
        text={`${secondsLeft}s`}
        styles={buildStyles({
           textSize: "44px",
          textColor: '#000',
          pathColor: '#10b981', // Tailwind's emerald-500
          trailColor: '#e5e7eb', // Tailwind's gray-200
        })}
      />
    </div>
    );
}

export default TimerCircle;
