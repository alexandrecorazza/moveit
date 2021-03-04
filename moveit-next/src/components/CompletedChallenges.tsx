import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CompletedChallenges.module.css'

/* explicação dessa classim, assim como o conceito por trás do Contexts em 38:04 - aula 3*/

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return(
    <div className={styles.completedChallengesContainer}>
      <span>Desafios Completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
}