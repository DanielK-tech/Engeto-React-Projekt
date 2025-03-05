import { useEffect, useRef } from "react"; 
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
/** Styly **/
import "./App.css";
/** Obrázky */
import WelcomePicture from "./img/first.jpg";
/** Data */
import Allpets from "./data";
/**Komponenty */
import Pets from "./components/Pets";
import PetsInfo from "./components/PetsInfo"; 
import RouteButton from "./components/RouteButton";
import  ApiSection  from "./components/ApiSection"; 
import PageNotFound from "./pages/PageNotFound";

const Home = () => {
    const welcomeTextRef = useRef(null);

    useEffect(() => {
        const paragraph = welcomeTextRef.current; // Získání reference na <p> element
        if (paragraph) {
            
            const text = paragraph.textContent; 
            const words = text.split(" "); // Rozdělíme text na pole slov
            if (words.length > 0) {
                // Kontrola, zda odstavec obsahuje slova
                const randomIndex = Math.floor(Math.random() * words.length); // Vygenerujeme náhodný index
                const randomWord = words[randomIndex]; // Získáme náhodné slovo
                // červené slovo
                const highlightedText = words
                    .map((word, index) => {
                        if (index === randomIndex) {
                            return `<span style="color: red">${word}</span>`; 
                        } else {
                            return word; // Ostatní slova necháme beze změny
                        }
                    })
                    .join(" "); // Spojíme slova zpět do textu

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
 //Hlavní komponenta aplikace
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/api" element={<ApiSection />} />
                <Route path="/api/seznam" element={<ApiSection />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};
export default App;
