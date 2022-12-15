import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/thumbsUp.png';
import downImage from '../../assets/thumbsDown.png';

type Props = {
    item: Level
}
export const GridItem = ({item}: Props) => {
    return (
        <div className={styles.main} style={{backgroundColor: item.color}}>
            <div className={styles.gridIcon}>
                <img src={item.icon === 'up' ?upImage : downImage} alt="" width="30" /> 
            </div>
            <div className={styles.gridTitle}>
                {item.title}
            </div>
            {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é de {item.yourImc} kg/m² </div>
            }
            <div className={styles.gridInfo}>
                <>
                    <strong>IMC</strong> entre <b>{item.imc[0]}</b> e <b>{item.imc[1]}</b>
                </>
            </div>
        </div>
    )
}