import Link from "next/link";
import styles from "../../styles/footerCustom.module.css"

export default function FooterCustom() {
    
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                
                    Desarrollado por Xavi Desarticulado
               
            </div>
            <div className={styles.containerLogo}>
                <Link href={"https://www.instagram.com/desarticuladoo/" || ''} target="_blank" passHref className={styles.logo}>
                    <img src="/ig.svg"  alt="logos"className={styles.img}/>
                </Link>
                <Link href={'https://t.me/desarticulado' || ''} target="_blank" passHref className={styles.logo}>
                    <img src="/telegram.jpg"  alt="logos"className={styles.img}/>
                </Link>
                <Link href={''} passHref className={styles.logo}>
                    <img src="/paypal.svg"  alt="logos"className={styles.img}/>
                </Link>
                <Link href={''} passHref className={styles.logo}>
                    <img src="/up.png"  alt="logos"className={styles.img}/>
                </Link>
            </div>
        </div>
    );
    }