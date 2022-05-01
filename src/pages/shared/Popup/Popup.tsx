import React from "react";
import styles from './Popup.module.scss'
import { GlobalSvgSelector } from '../../../assed/icons/GlobalSvgSelector';
import Select from "react-select";
import { ThisDayitem } from '../../Home/component/ThisDayInfo/ThisDayItem';
import { Item } from '../../Home/component/ThisDayInfo/ThisDayInfo';


interface Props {
    

}
export const Popup = ({}:Props) => {
    const items = [
        {
          icon_id: 'temp',
          name: 'Температура',
          value: '20° - ощущается как 17°',
        },
        {
          icon_id: 'pressure',
          name: 'Давление',
          value: '765 мм ртутного столба - нормальное',
        },
        {
          icon_id: 'precipitation',
          name: 'Осадки',
          value: 'Без осадков',
        },
        {
          icon_id: 'wind',
          name: 'Ветер',
          value: '3 м/с юго-запад - легкий ветер',
        },
      ];
   
    return(
        <>   
        <div className={styles.blur}></div>
            <div className={styles.Popup}>
                <div className={styles.day}>
                    <div className={styles.day_temp}>20°</div>
                    <div className={styles.day_name}>Среда</div>
                    <div className={styles.img}><GlobalSvgSelector id="days"/></div>
                    <div className={styles.day_time}>
                <div className={styles.day_time}>Время: <span>21:54</span></div>
                <div className={styles.day_city}>Время: <span>Бишкек</span></div>
                
            </div>
                </div>
            <div className={styles.thisdayinfo}/>
            <div className={styles.Thisdayitems}>
            {items.map((item: Item) => (
          <ThisDayitem key={item.icon_id} item={item} />
        ))}
            </div>
            <div className={styles.close}>
                <GlobalSvgSelector id="close"/>
            </div>
           
        
        </div>
        </>
 
    )
}