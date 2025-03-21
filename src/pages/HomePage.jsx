import { useEffect, useRef } from "react";
/** Styly **/
import "../styles/homePage.css";
/** Obrázky */
import WelcomePicture from "../img/first.jpg";
/** Data */
import Allpets from "../data/data";
/**Komponenty */
import RouteButton from "../components/RouteButton";
import PetsInfo from "../components/PetsInfo"; 
import Pets from "../components/Pets";

const HomePage = () => {
    const welcomeTextRef = useRef(null);

    useEffect(() => {
        const paragraph = welcomeTextRef.current; 
        if (paragraph) {
            const text = paragraph.textContent;
            const words = text.split(" "); 
            if (words.length > 0) {
                
                const randomIndex = Math.floor(Math.random() * words.length); 
                const randomWord = words[randomIndex]; 
                // červené slovo
                const highlightedText = words
                    .map((word, index) => {
                        if (index === randomIndex) {
                            return `<span style="color: red">${word}</span>`;
                        } else {
                            return word; 
                        }
                    })
                    .join(" "); 

                paragraph.innerHTML = highlightedText;
            }
        }
    }, []);

    return (
        <div className="MainContainer">
            <img
                className="WelcomePicture"
                src={WelcomePicture}
                alt="Dva pejci na louce"
            />
            <h1>Moji domácí mazlíčci</h1>
            <p className="WelcomeText" ref={welcomeTextRef}>
                Čtyři mazlíčci, moje vášeň, můj chov. Zajímá vás, jak chovám
                agamu vousatou, křečka džungarského, jezevčíka a morče? Na této
                stránce najdete můj osobní pohled a praktické rady z
                každodenního života s nimi. Vítejte!
            </p>
            <h2>Moji mazlíčci</h2>
            <section className="PetsContainer">
                {Allpets.map((pet, index) => (
                    <Pets
                        key={index}
                        image={pet.image}
                        name={pet.name}
                        text={pet.text}
                    />
                ))}
            </section>
            <section className="PetsInfoSection">
                <PetsInfo />
            </section>
            <RouteButton />
        </div>
    );
};

export default HomePage;
