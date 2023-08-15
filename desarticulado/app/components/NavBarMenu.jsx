'use client'
import {useState, useEffect} from "react";
import Link from "next/link";
import styles from "../../styles/navBarMenuCustom.module.css"
import { ButtonCustom } from "./ButtonCustom";

export default function NavBarMenu({ alt, route, imageUrl }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleResize = () => {
        if (window.innerWidth > 949) {
          setIsMenuOpen(false);
        }
    };
    
    useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
        window.removeEventListener("resize", handleResize);
    };
    }, []);

    const menuItems = {
      random: "Random",
      escritura: "Escritura",
      galeria: "Galería",
      multimedia: "Multimedía",
      code: "Code",
      about: "Sobre mí"
    };
    
    return (
        <nav className={styles.navBar}>
            <nav className={styles.navBarSecondary}>
                <img src="/logo.gif" id={styles.logo} />
                <div className={isMenuOpen ? styles.buttonBarOpen : styles.buttonBar }>
                    {Object.entries(menuItems).map(([route, name], index) => (
                        <ButtonCustom key={index} name={name} route={route}/>
                    ))}
                </div>
                <button className={isMenuOpen ? styles.buttonMenuOpen : styles.buttonMenu } onClick={handleClick}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
            </nav>
            <div className={styles.subtitleContainer}>
                <text>
                Has llegado a este lugar... Como podrías haber llegado a cualquier otro.<br/> Puedes pasar, descansa si lo necesitas... 

                </text>
            </div>
        </nav>
    );
    }