import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { ChallengesContext } from './ChallengesContext'

interface CountdownContextData {
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    isActive: boolean,
    startCountdown: () => void
    resetCountdown: () => void
}

interface CountdownProviderProps {
    children: ReactNode
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout : NodeJS.Timeout

export function CountdownProvider({ children }: CountdownProviderProps) {
    const { startNewChallenge } = useContext(ChallengesContext)

    const [time, setTime] = useState(25 * 60)
    const [isActive, setIsActive] = useState(false)
    const [hasFinished, setHasFinished] = useState(false)
    const minutes = Math.floor(time / 60) /* Math.floor arredonda o número para baixo. Pq se tivermos por ex 24min e 59s, a função vai retornar 24min */
    const seconds = time % 60

    function startCountdown() {
        setIsActive(true)
      }
    
      function resetCountdown() {
        clearTimeout(countdownTimeout)
        setIsActive(false)
        setTime(25 * 60)
        setHasFinished(false)
      }
    
      useEffect(() => {
        if (isActive && time > 0) {
          countdownTimeout = setTimeout(() => {
            setTime(time - 1)
          }, 1000)
        } else if (isActive && time === 0) {
          setHasFinished(true)
          setIsActive(false)
          startNewChallenge()
        }
      }, [isActive, time]) /* sempre que o valor de active ou time mudar, então, o useEffect executará! */
    
    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}