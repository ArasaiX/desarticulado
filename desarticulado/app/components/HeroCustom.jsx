import styles from "../../styles/HeroCustom.module.css"
import BurgerMenu from "./BurgerMenu"

export function HeroCustom() {
    return (
        <div>
            <section className={styles.hero}>
                <header id={styles.header}>
                    {/* <a id={styles.logo} href="#">X</a> */}
                    <img src="/lagrimas.jpeg"  id={styles.logo}/>
                    <nav>
                        
                    <BurgerMenu />
                    </nav>
                </header>
                <header className={styles.heroHeader}>
                    <h1 className={styles.heroTitle}>Desarticulado</h1>
                    <img src="/city.gif" alt="city night" className={styles.imageHeader}/>
                </header>
                <footer className={styles.heroFooter}>
                    <div className={styles.movingTextContainer}>
                        <span className={styles.movingText}>
                            Aquí tengo que poner una frase de esas que dices: Joder, menuda puta buena frase esta eh
                            O quizás algo en plan, anunciando algo... ¿sabes?
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

