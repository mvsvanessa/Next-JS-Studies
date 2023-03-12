import styles from '../styles/popup.module.css'
import 'reactjs-popup/dist/index.css';

export default function Popup(props){
    return(props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.popupinner}>
            <p>Fill the information bellow to purchase your gift:</p>
            </div>
            <div className={styles.botao}>
                <button className={styles.button}
                    onClick={() => props.setTrigger(false)}>
                    SEND ORDER
                </button>
            </div>
        </div>
    ) : ""
    
}