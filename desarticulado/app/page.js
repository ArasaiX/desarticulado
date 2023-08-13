import InfoCardCustom from "./components/InfoCardCustom";
import { HeroCustom } from "./components/HeroCustom";
import { HeaderCustom } from "./components/HeaderCustom";
import PostCard from "./components/PostCard";
import BannerCustom from "./components/BannerCustom"
import ExperimentalBox from "./components/ExperimentalBox"
import GalleryCustom from "./components/GalleryCustom";
import FooterCustom from "./components/FooterCustom";

const texts = [
  "A representation of the older titles",
  "Newest boring things, the same of all day",
  "All life ",
  "No quiero saber nada más",
  "Quien quiere nada"
]

export default function Home() {
  const container = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    padding: "2em",
    overflow: "hidden"
  }

  const secondContainer = {
    display: "flex",
    flexDirection: "column"
  }

  return (
      <div style={container}>
        <HeroCustom />
        <InfoCardCustom title="Literatura"  text={texts[0]} route="relatos" imageUrl="/1bb63b38c2dea16caf47cbbaaab27c3e.jpg" />
        <InfoCardCustom title="Galería"  text={texts[1]} route="galeria" imageUrl="" />
        <InfoCardCustom title="Random"  text={texts[2]} route="random" imageUrl="/76245f8de5efffca10f1ab562dfd7d03.jpg" />
        <InfoCardCustom title="Multimedia"  text="" route="multimedia" imageUrl="/66af84de59e46d6de04cb62406d9c43e.jpg" />
        <InfoCardCustom title="Code"  text={texts[3]} route="code" imageUrl="/lagrimas.jpeg" />
        <InfoCardCustom title="Sobre mí"  text="" route="about" imageUrl="/e2aef657b2faac87de8c27ee392bc5ca.jpg" />


        <GalleryCustom />
        
        {/* <ExperimentalBox /> */}
        
{/*         
        <PostCard /> */}

        <FooterCustom />
      </div>
    )
}
