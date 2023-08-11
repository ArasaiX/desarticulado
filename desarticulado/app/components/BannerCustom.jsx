import Link from "next/link";
import styles from "../../styles/bannerCustom.module.css"

export default function InfoCardCustom({ alt, route, imageUrl }) {

    return (
        <Link href={route || ''} passHref className={styles.container}>
            <img src={imageUrl}  alt={alt} className={styles.img}/>
        </Link>
    );
    }