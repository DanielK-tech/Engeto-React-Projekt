import React, { useEffect, useRef } from "react";
/** Styly **/
import "./App.css";
/** Obrázky */
import WelcomePicture from "./img/first.jpg";
/** Data */
import Allpets from "./data";
/**Komponenty */
import Pets from "./components/Pets";
import PetsInfo from "./components/PetsInfo";
import Api from "./pages/Api"
import ApiList from "./pages/ApiGenrator"

const App = () => {
    const welcomeTextRef = useRef(null);

    useEffect(() => {
        const paragraph = welcomeTextRef.current; // Získání reference na <p> element
        if (paragraph) {
            // Kontrola, zda se odstavec načetl
            const text = paragraph.textContent; // Získáme textový obsah odstavce
            const words = text.split(" "); // Rozdělíme text na pole slov
            if (words.length > 0) {
                // Kontrola, zda odstavec obsahuje slova
                const randomIndex = Math.floor(Math.random() * words.length); // Vygenerujeme náhodný index
                const randomWord = words[randomIndex]; // Získáme náhodné slovo
                // Vytvoříme HTML pro odstavec s obaleným červeným slovem
                const highlightedText = words
                    .map((word, index) => {
                        if (index === randomIndex) {
                            return `<span style="color: red">${word}</span>`; // Obalíme náhodné slovo do <span>
                        } else {
                            return word; // Ostatní slova necháme beze změny
                        }
                    })
                    .join(" "); // Spojíme slova zpět do textu

                paragraph.innerHTML = highlightedText; // Nastavíme upravený HTML obsah odstavce
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
            <section> 
                <Api />
                <ApiList />
            </section>
        </div>
    );
};

export default App;
