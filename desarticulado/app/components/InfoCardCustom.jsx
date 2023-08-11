import Link from "next/link";
import styles from "../../styles/infoCardCustom.module.css";

export default function InfoCardCustom({ title, text, route, imageUrl, isFixed }) {
    const boxCardClassName = isFixed ? styles.boxCardFixed   : styles.boxCard;

    return (
        <Link href={route || ''} passHref className={styles.container}>
        <div className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            <div className={boxCardClassName} style={{ backgroundImage: `url(${imageUrl})` }}>
            <p className={styles.text}>{text}</p>
            </div>
        </div>
        </Link>
    );
    }
