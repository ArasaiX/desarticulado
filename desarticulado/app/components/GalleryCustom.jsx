import Link from "next/link";
import styles from "../../styles/galleryCustom.module.css"
import GalleryCard from "./GalleryCard";

export default function GalleryCustom() {

    return (
        <div className={styles.container}>
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/animation.gif.gif" />
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/lunakinki.jpg" />
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/ojo.jpg" />
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/lagrimas.jpeg" />
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/brutal.jpg" />
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/subrou.jpg" />
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/cararoja.png" />
        <GalleryCard alt="Are you lost?" route="infinito" imageUrl="/dondeestadios.png" />

        </div>
    );
    }