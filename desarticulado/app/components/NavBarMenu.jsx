'use client'
import React from "react";
import Link from "next/link";
import styles from "../../styles/navBarMenuCustom.module.css"

export default function NavBarMenu({ alt, route, imageUrl }) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen)
      }

    const menuItems = [
      "Profile",
      "Dashboard",
      "Activity",
      "Analytics",
      "System",
      "Deployments",
      "My Settings",
      "Team Settings",
      "Help & Feedback",
      "Log Out",
    ];

    return (
        <nav>
            <button className={styles.buttonMenu} onClick={handleClick}></button>

        </nav>
    );
    }