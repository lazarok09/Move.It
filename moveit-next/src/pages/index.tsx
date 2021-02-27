import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges} from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengeBox } from '../components/ChallengeBox';

import styles from  '../styles/pages/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>
      Início | move.it  
      </title>
      </Head>
  
    <ExperienceBar />

    <CountdownProvider>
      <section>

        <div>
        <Profile />
        <CompletedChallenges />
        <Countdown />
        </div>

        <div>
        <ChallengeBox />
        </div>
      </section>
    </CountdownProvider>
    </div>      
      )
}