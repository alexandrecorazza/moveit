import { createContext, ReactNode, useEffect, useState } from 'react';
import Cookies from 'js-cookie'
import challenges from '../../challenges.json'  //após esse import, temos todos os desafios dentro de um array que está armazenado dentro dessa variável que nomeamos como challenge
import { LevelUpModal } from '../components/LevelUpModal';


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
    completeChallenge: () => void;
    closeLevelUpModal : () => void;
}

interface ChallengesProviderProps {
    children: ReactNode //como temos como children um outro componente, usaremos o ReactNode, que aceita qualquer elemento filho como children, podendo ser um componente, texto, inteiro, tag HTML, qualquer coisa...
    level: number
    currentExperience: number
    challengesCompleted: number
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallengesProvider({ children, ...rest } : ChallengesProviderProps) {   //...rest = pega o resto das propriedades que não são a children
    const [level, setLevel] = useState(rest.level ?? 1) //se rest.level não existir, então preenche com 1
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0)
    const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0)
    const [activeChallenge, setActiveChallenge] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpModelOpen] = useState(false)

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)   //cálculo da experiência baseado usando raiz quadrada(baseado nos jogos de rpg). O 4 é o fator de experiência(rate experience) podendo aumentar ou diminuir a quantidade de exp ganhada mudando o seu valor

    useEffect(() => {
        Notification.requestPermission() //API do próprio browser. Pesquisar por mdn notifications
    }, [])

    useEffect(() => {
        Cookies.set('level', String(level)) //os cookies só aceitam String, portanto, é necessário converter os objetos para String
        Cookies.set('currentExperience', String(currentExperience))
        Cookies.set('challengesCompleted', String(challengesCompleted))

    }, [level, currentExperience, challengesCompleted])

    function levelUp() {
        setLevel(level + 1)
        setIsLevelUpModelOpen(true)
    }

    function closeLevelUpModal() {
        setIsLevelUpModelOpen(false) 
    }

    function startNewChallenge() {
        const randomChallengeIndex = Math.floor(Math.random() * challenges.length)  //Math.random() retorna um número randômico entre 0 e 1. O Math.floor arredonda pra baixo o resultado dentro do parênteses, pois a multiplicação retorna um número quebrado
        /*console.log(challenges)
        console.log(challenges.length)
        console.log(Math.random() * challenges.length)
        console.log(Math.floor(Math.random() * challenges.length))*/
        const challenge = challenges[randomChallengeIndex]
        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play()

        if (Notification.permission === 'granted') {
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp!`
            })
        }
    }

    function resetChallenge() { //função chamada quando o usuário falhar no desafio
        setActiveChallenge(null)
    }

    function completeChallenge() {
        if (!activeChallenge){
            return
        }

        const { amount } = activeChallenge
        let finalExperience = currentExperience + amount

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience - experienceToNextLevel
            levelUp()
        }

        setCurrentExperience(finalExperience)
        setActiveChallenge(null)
        setChallengesCompleted(challengesCompleted + 1)
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
                resetChallenge,
                completeChallenge,
                closeLevelUpModal 
            }}
        >
            {children}

            { isLevelUpModalOpen && <LevelUpModal/>}
        </ChallengesContext.Provider>
    )
}