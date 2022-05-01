import React from "react";
import { GlobalSvgSelector } from "../../../../assed/icons/GlobalSvgSelector";
import styles from './ThisDay.module.scss'

interface Props {

}
export const ThisDay = (props:Props) => {
    return(
        <header className={styles.ThisDay}>
            <div className={styles.topblock}>
                <div className={styles.top_wrapper}>
                <div className={styles.thistamp}>20°</div>
                <div className={styles.thisday}>Сегодня</div>
                </div>
                <GlobalSvgSelector id='sun'/>
            </div>
            <div className={styles.bottomblock}>
                <div className={styles.thistime}>Время: <span>21:54</span></div>
                <div className={styles.thistime}>Время: <span>Бишкек</span></div>
                
            </div>
        </header>
    )
}