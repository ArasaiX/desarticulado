'use client'

import {ButtonCustom} from "../components/ButtonCustom"
import { HeaderCustom } from "./HeaderCustom";
import { useState } from "react";
import styles from "../../styles/BurgerMenu.module.css" 

export default function BurgerMenu() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <div>
            <button className={styles.buttonMenu} onClick={toggleMenu}></button>
            {isOpen && (
                <div >
                    <HeaderCustom />

                    {/* <ul>
                    <li>
                        <ButtonCustom name="Home" route="/"/>
                    </li>
                    <li>
                        <ButtonCustom name="Literatura" route="relatos"/>
                    </li>
                    <li>
                        <ButtonCustom name="Galería" route="galeria"/>
                    </li>
                    <li>
                        <ButtonCustom name="Random" route="random"/>
                    </li>
                    <li>
                        <ButtonCustom name="Multimedia" route="multimedia"/>
                    </li>
                    <li>
                        <ButtonCustom name="Code" route="code"/>
                    </li>
                    <li>
                        <ButtonCustom name="Sobre mí" route="about"/> 
                    </li>
                    </ul> */}
                </div>
                )}
        </div>
    )
}
