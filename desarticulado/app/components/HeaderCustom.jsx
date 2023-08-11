import { ButtonCustom } from "./ButtonCustom";
import styles from "../../styles/HeaderCustom.module.css"

export function HeaderCustom() {
    return (
        <div className={styles.header}>
            <nav className={styles.navigationBar}>
                <ButtonCustom name="Home" route="/"/>
                <ButtonCustom name="Literatura" route="relatos"/>
                <ButtonCustom name="Galería" route="galeria"/>
                <ButtonCustom name="Random" route="random"/>
                <ButtonCustom name="Multimedia" route="multimedia"/>
                <ButtonCustom name="Code" route="code"/>
                <ButtonCustom name="Sobre mí" route="about"/>
            </nav>
        </div>
    )
}
