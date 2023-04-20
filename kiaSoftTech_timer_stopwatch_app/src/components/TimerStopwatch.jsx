import React, { useEffect, useRef, useState } from 'react'

const format = (time) => {
    let hours = Math.floor(time / 60 / 60 % 24)
    let minutes = Math.floor(time / 60 % 60 )
    let seconds = Math.floor(time % 60 )

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    
    return hours + " : " + minutes + " : " + seconds
}

const TimerStopwatch = () => {

    const [time, setTime] = useState(0)
    const [running, setIsRunning] = useState(true)

    const timer = useRef()

    useEffect(()=>{
        if(running){
            timer.current = setInterval(()=>{
                setTime(prev => prev + 1)
            },1000)
        }
    return ()=>clearInterval(timer.current)
    },[running])

    const hanldeRestart =()=>{
        setTime(0)
    }

    const handleStop =()=>{
        if(running)clearInterval(timer.current)
        setIsRunning(!running)
    }

  return (
    <div className="timer">
        <div className="clock">
            <div className="heading__bar">
                <span>Time / Stopwatch </span>
                <div className="setting__icon">
                    ⚙
                </div>
            </div>
            <div className="timer__container">
                <p className='timer__details'>{format(time)}</p>
            </div>
            <div className='timer__buttons'>
                <button onClick={hanldeRestart}>
                    Restart
                </button>
                <button onClick={handleStop}>
                    {running ? "Stop" : "Resume"}
                </button>
            </div>
        </div>
    </div>
  )
}

export default TimerStopwatch