import { useContext } from "react";
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";


export function Countdown() {
  const {
     minutes,
     seconds, 
     hasFinished, 
     isActive, 
     startCountdown,
     resetCountdown
   } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  

  return (
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
        <button disabled className={styles.countdownButton}>
          <span className={styles.cicloEncerrado}>Ciclo encerrado</span>
          <img src="icons/check.png" alt="" />
        </button>
      ) : (
        <>
          {" "}
          {/* tag Fragment pra resolver limitação do React em que seria necessário colocar uma div em volta de tudo que está abaixo */}
          {/* Ternário responsável por mostrar um botão diferente a depender de ativo ou inativa a contagem */}
          {isActive ? (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
