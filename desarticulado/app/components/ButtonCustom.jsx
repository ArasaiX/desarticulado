import styles from '../../styles/ButtonCustom.module.css';
import Link from 'next/link';

export function ButtonCustom({ name, route }) {

    return (
        <Link href={route || ''}  passHref>
            <button  className={styles.button}>{name}</button>
        </Link>
    )
}
