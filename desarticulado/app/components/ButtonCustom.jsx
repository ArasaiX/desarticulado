import styles from '../../styles/ButtonCustom.module.css';
import Link from 'next/link';

export function ButtonCustom({ key, name, route }) {

    return (
        <Link href={route || ''}  passHref>
            <button key={key} className={styles.button}>{name}</button>
        </Link>
    )
}
