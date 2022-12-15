import styles from './keyword-box.module.css';

export default function KeywordBox(props) {
    return (
        <>
            {props.orange
                ? <span className={styles.boxOrange} >{props.children}</span>
                : <span className={styles.box} >{props.children}</span>
            }
        </>  
    );
}