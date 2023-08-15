import styles from "../../styles/HeroCustom.module.css"
import NavBarMenu from "./NavBarMenu"

export function HeroCustom() {

    return (
        <div className={styles.container}>
            <section className={styles.hero}>

                <header className={styles.heroHeader}>
                    <div>
                        <h1 className={styles.heroTitle}>Desarticulado</h1>
                    </div>
                    <div>
                        <img src="/city.gif" alt="city night" className={styles.imageHeader} />
                    </div>
                </header>
                <footer className={styles.heroFooter}>
                    <div className={styles.movingTextContainer}>
                        <span className={styles.movingText}>
                            Extásis de Placer y Dolor. Hiper Hedonismo como fuerza vital.
                        </span>
                    </div>
                    {/*
                        Add in array the names and routes ¿object? and map >>>
                        >>> Can i map an object? Yes with Object.values() and a
                        array method to iterate it
                        and make this more dinamic
                    */}
                    {/* <ButtonCustom name="Home" route="/"/>
                <ButtonCustom name="First awesome button" route="firstPage"/>
                <ButtonCustom name="Second amazing button" route="second"/>
                <ButtonCustom name="Third fucking button" route="third"/>
                <ButtonCustom name="Clicking is boring" route="boring"/>
                <ButtonCustom name="At least this ends" route="final"/> */}
                </footer>
            </section>
        </div>
    )
}

