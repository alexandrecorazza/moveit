import Head from "next/head"

import { GetServerSideProps } from 'next'
import { CompletedChallenges } from "../../components/CompletedChallenges"
import { Countdown } from "../../components/Countdown"
import { ExperienceBar } from "../../components/ExperienceBar"
import { Profile } from "../../components/Profile"
import { ChallengeBox } from "../../components/ChallengeBox"
import styles from '../../styles/pages/Home.module.css'
import { CountdownProvider } from "../../contexts/CountdownContext"
import { ChallengesProvider } from '../../contexts/ChallengesContext'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
  accessToken: String
}

export default function Home(props: HomeProps) {

  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Início | move.it</title>
           
        </Head>
        <ExperienceBar/>
        <CountdownProvider>
          <section>
            <div>
              <Profile/>
              <CompletedChallenges/>
              <Countdown/>
            </div>
            <div>
              <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

//manipula quais dados são passados da camada do servidor Next(Node.js) para o cliente(front-end/React)
//fazer chamada a API utilizando esse método getServerSideProps. A chamada a API ou consumo de qualquer outro serviço externo poderia ser feito dentro do componente normalmente, porém, não estaria disponível pelos motores de buscas como Google por exemplo, pq ele não aguarda a chamada terminar, pois essa chamada rodaria no browser. O Next não faz essa chamada antes de construir a interface. Se a chamada da API for feita por esse getServerSideProps, o Next vai primeiro fazer a chamada API para depois construir a interface 
//tudo o que fizermos nesse método getServerSideProps vai executar do lado do servidor do Next.js e não do lado do browser  
export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengesCompleted } = ctx.req.cookies
  //console.log(level, currentExperience, challengesCompleted) //ao colocarmos esse console.log, o log não aparecerá no navegador e sim no terminal, pois essa função executa do lado do servidor Next(Node.js)
  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}