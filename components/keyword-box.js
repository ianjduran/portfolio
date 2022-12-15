import styles from './keyword-box.module.css';

export default function KeywordBox(props) {
    return (
        <span className={styles.box} >{props.children}</span>
    );
}