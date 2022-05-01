import React from "react";
import styles from './Header.module.scss'
import { GlobalSvgSelector } from '../../assed/icons/GlobalSvgSelector';
import Select from "react-select";


interface Props {

}
export const Header = (props:Props) => {
    const options = [
        { value: '/', label: 'Выбрать город' },
        { value: 'City1', label: 'Бишкек' },
        { value: 'City2', label: 'Ош' }
      ]
      const colorStyles = {
          control: (styles: any) => ({
              ...styles,
              backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
              width: '194px',
              height: '37px',
              border: 'none',
              borderRadius: '10px',
              zIndex: 100,
          }),

            singleValue: (styles: any) => ({
                ...styles,
                backgroundColor: 0 ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',

            }),
          };
    return(
        <header className={styles.Header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <GlobalSvgSelector id="header-logo"/>
                </div>
                <div className={styles.title}>React Weather</div>
            </div>
            <div className={styles.wrapper}>
               <div className={styles.changetheme}>
                <GlobalSvgSelector id="changetheme"/>
                </div>
                <div className={styles.changetheme}>
                   <Select
                   defaultValue={options[0]}
                    styles={colorStyles}
                     options={options} />  
                </div>
                
            </div>
        </header>
    )
}