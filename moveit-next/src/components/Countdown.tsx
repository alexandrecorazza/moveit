import { useContext } from 'react'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout : NodeJS.Timeout

export function Countdown() {
  const { minutes, seconds, hasFinished, isActive, startCountdown, resetCountdown } = useContext(CountdownContext)

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')  /* explicação aula 2 1:03:24*/
  /* o método split vai retornar um array com duas posições, e por isso, podemos desestruturar o array, para pegar esses dois valores e savá-los nas variáveis(minuteLeft e minuteRight) que definimos na desestruturação  */
  /* OBS: A desestruturação é característica do js e não do React */
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  return(
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button 
          disabled
          className={styles.countdownButton} /* é uma forma de aplicar dois className de uma vez. Tem que ser entre `` pq o retorno dentro do {styles.countdownButton} é uma string */
      >
        Ciclo encerrado
        </button>
      ) : (
        <>
          { isActive ? (
            <button 
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`} /* é uma forma de aplicar dois className de uma vez. Tem que ser entre `` pq o retorno dentro do {styles.countdownButton} é uma string */
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </button>
            ) : (
              <button 
                type="button"
                className={styles.countdownButton}
                onClick={startCountdown}
              >
              Iniciar um ciclo
              </button>
            ) }
        </> /* fim do <Fragmant> */
      )}      

    </div>
  );
}