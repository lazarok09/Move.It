import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { CompletedChallenges} from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengeBox } from '../components/ChallengeBox';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from  '../styles/pages/Home.module.css';
import Head from 'next/head';


interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}




export default function Home(props: HomeProps) {


  console.log(props);
  return (
    <body className={styles.body}>
    <div className={styles.container}>

        <ChallengesProvider 
        level={ props.level }
        currentExperience={ props.currentExperience }
        challengesCompleted= { props.challengesCompleted }
        >
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
      </ChallengesProvider>
      
    </div>      
    </body>
      )
}
/* Antes de construir a interface em React, passe as propriedades. */
export const getServerSideProps: GetServerSideProps = async ( ctx ) => {
  // chamada API
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props:  {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted)
    }
  }
}