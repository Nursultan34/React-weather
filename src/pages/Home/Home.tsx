import React from "react";
import { Days } from "./component/Days/Days";
import { ThisDay } from "./component/ThisDay/ThisDay";
import { ThisDayInfo } from "./component/ThisDayInfo/ThisDayInfo";
import styles from './Home.module.scss'

interface Props {

}
export const Home = (props:Props) => {
    return(
        <div className={styles.home}>
            <div className={styles.wrapper}>
             <ThisDay/>
             <ThisDayInfo/>
             </div>
             <Days/>
        </div>
    )
}