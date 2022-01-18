import { useState } from "react"

const Reloj = () => {
    const [time, setTime] = useState(null)
    const leadingZero = n => `${n}`.padStart(2, 0)
    const timer = setInterval(()=>{
        const date = new Date()
        const hours = leadingZero(date.getHours())
        const minutes = leadingZero(date.getMinutes())
        const seconds = leadingZero(date.getSeconds())
        const time = `${hours}:${minutes}:${seconds}`
        setTime(time)
      },1000)
    return (
        <span>{time}</span>
    )
}


export {
    Reloj
}