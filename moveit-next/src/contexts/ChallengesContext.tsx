import { createContext, ReactNode, useState } from 'react';
import challenges from '../../challenges.json'  //após esse import, temos todos os desafios dentro de um array que está armazenado dentro dessa variável que nomeamos como challenge


interface Challenge {
    type: 'body' | 'eye';    //apesar de o type ser do tipo String, ou ele será uma String 'body ou 'eye'
    description: string;
    amount: number;
}

//declaramos essa interface apenas para que lá no nosso Countdown.tsx o typescript sugira a importação automática utilizando control + space
interface ChallengesContextData{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    activeChallenge: Challenge;
    experienceToNextLevel: number;
    levelUp: () => void;    //função que não tem parâmetro e retorna vazio
    startNewChallenge: () => void;  //função que não tem parâmetro e retorna vazio
    resetChallenge: () => void;
}

interface ChallengesProviderProps {
    children: ReactNode //como temos como children um outro componente, usaremos o ReactNode, que aceita qualquer elemento filho como children, podendo ser um componente, texto, inteiro, tag HTML, qualquer coisa...
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children } : ChallengesProviderProps) {
    const [level, setLevel] = useState(1)
    const [currentExperience, setCurrentExperience] = useState(0)
    const [challengesCompleted, setChallengesCompleted] = useState(0)

    const[activeChallenge, setActiveChallenge] = useState(null)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)   //cálculo da experiência baseado usando raiz quadrada(baseado nos jogos de rpg). O 4 é o fator de experiência(rate experience) podendo aumentar ou diminuir a quantidade de exp ganhada mudando o seu valor

    function levelUp() {
        setLevel(level + 1)
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)  //Math.random() retorna um número randômico entre 0 e 1. O Math.floor arredonda pra baixo o resultado dentro do parênteses, pois a multiplicação retorna um número quebrado
        /*console.log(challenges)
        console.log(challenges.length)
        console.log(Math.random() * challenges.length)
        console.log(Math.floor(Math.random() * challenges.length))*/
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)
    }

    function resetChallenge() { //função chamada quando o usuário falhar no desafio
        setActiveChallenge(null)
    }

    return (
        <ChallengesContext.Provider 
            value={{
                level,
                currentExperience,
                challengesCompleted,
                activeChallenge,
                experienceToNextLevel,
                levelUp,
                startNewChallenge,
                resetChallenge
            }}
        >
            {children}
        </ChallengesContext.Provider>
    )
}