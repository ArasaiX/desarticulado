import Link from "next/link";
import styles from "../../styles/galleryCard.module.css"

export default function GalleryCard({ alt, route, imageUrl }) {

    return (
        <Link href={route || ''} passHref className={styles.container}>
            <img alt={alt} src={imageUrl} className={styles.image}/>
        </Link>

    );
    }