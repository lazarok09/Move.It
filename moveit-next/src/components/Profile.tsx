import styles from "../styles/components/Profile.module.css";
import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/lazarok09.png" alt="user picture" />
      <div>
        <strong>Lazaro Souza</strong>
        <p>
          <img src="icons/level.svg" alt="Level icon" />
          Level {`${level}`}
        </p>
      </div>
    </div>
  );
}
