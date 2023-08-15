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

    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavHidden, setIsNavHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;     
            console.log(window)       
            console.log(`Last scroll are: ${lastScrollY} and the current scroll are: ${currentScrollY}`)
            if (lastScrollY <= currentScrollY) {
                // console.log("Scrolled down!");   
                setIsNavHidden(true)
            } else if (lastScrollY >= currentScrollY) {
                // console.log("scroll up!")
                setIsNavHidden(false)
            } else {
                setIsNavHidden(true)             
            }
            setLastScrollY(currentScrollY);
        };
      
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, [lastScrollY]);

    // const memoizedCallback = useCallback(
    //     () => {
    //       // Código de la función
    //     },
    //     [/* Dependencias */]
    //   );

    const menuItems = {
      random: "Random",
      escritura: "Escritura",
      galeria: "Galería",
      multimedia: "Multimedía",
      code: "Code",
      about: "Sobre mí"
    };
    
    return (
        <nav className={isNavHidden ? styles.navBarHidden : styles.navBar}>
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