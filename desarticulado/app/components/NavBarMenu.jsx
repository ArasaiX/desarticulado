'use client'
import {useState, useEffect} from "react";
import styles from "../../styles/navBarMenuCustom.module.css"
import { ButtonCustom } from "./ButtonCustom";

export default function NavBarMenu() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0); // se puede cambiar  0 por window.scrollY
    const [isNavHidden, setIsNavHidden] = useState(false);

    let currentScrollY = 0;     

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

    useEffect(() => {
        const handleScroll = () => {
            currentScrollY = window.scrollY;     
            // console.log(window)       
            // console.log(`Last scroll are: ${lastScrollY} and the current scroll are: ${currentScrollY}`)
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

    const menuItems = {
      random: "Random",
      escritura: "Escritura",
      galeria: "Galería",
      multimedia: "Multimedía",
      code: "Code",
      about: "Sobre mí"
    };
    async function test() {
        try {
            const response  = await fetch("https://api-eu-west-2.hygraph.com/v2/cljtttz1c12hv01uc8rnpf9wp/master", {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${process.env.GRAPH_CMS_API_KEY}`
                },
                body: JSON.stringify({
                    query: `
                query getPosts {
                    posts {
                    edges {
                        node {
                        title
                        excerpt
                        slug
                        date
                        }
                    }
                    }
                }
                `,
            }),
            next: { revalidate: 10 },
            }).then((res) => res.json());
        
        
            
          if (!response.ok) {
            throw new Error(`Error al obtener los datos. Código de estado: ${response.status}`);
          }
          const data = await response.json();
          // Do something with the data here
          console.log(data);
        } catch (error) {
          console.error('Ocurrió un error:', error);
        }
      }

    //   test()
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
            <div className={currentScrollY != 0 ? styles.subtitleHidden : styles.subtitleContainer}>
                <div>
                Has llegado a este lugar... Como podrías haber llegado a cualquier otro.<br/> Puedes pasar, descansa si lo necesitas... 

                </div>
            </div>
        </nav>
    );
    }