import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
  const [time, setTime] = useState(1 * 60)
  const [active, setActive] = useState(false)
  const minutes = Math.floor(time / 60) /* Math.floor arredonda o número para baixo. Pq se tivermos por ex 24min e 59s, a função vai retornar 24min */
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')  /* explicação aula 2 1:03:24*/
  /* o método split vai retornar um array com duas posições, e por isso, podemos desestruturar o array, para pegar esses dois valores e savá-los nas variáveis(minuteLeft e minuteRight) que definimos na desestruturação  */
  /* OBS: A desestruturação é característica do js e não do React */
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startCountdown() {
    setActive(true)
  }

  useEffect(() => {
    if(active && time > 0) {
      setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    }
  }, [active, time]) /* sempre que o valor de active mudar, então, o useEffect executará! */

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
      <button 
        type="button"
        className={styles.countdownButton}
        onClick={startCountdown}
      >
        Iniciar um ciclo
      </button>
    </div>
  );
}