import "./Api.css"; 
import React, { useState } from "react";

const CatImageFinder = () => {
    // 1. Stav pro input pole (klíčové slovo pro vyhledávání)
    const [searchQuery, setSearchQuery] = useState("");
    // 2. Stav pro URL obrázku kočky (z API odpovědi)
    const [catImageUrl, setCatImageUrl] = useState(null);
    // 3. Stav pro zprávu o chybě (pokud API volání selže)
    const [error, setError] = useState(null);
    // 4. Stav pro indikaci načítání dat (pro zobrazení "Loading...")
    const [isLoading, setIsLoading] = useState(false);

    // Funkce pro handlování změny input pole
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // Funkce pro handlování odeslání formuláře
    const handleSubmit = async (event) => {
        event.preventDefault(); // Zabránění defaultnímu odeslání formuláře (refresh stránky)

        // Resetujeme předchozí stav a chyby
        setCatImageUrl(null);
        setError(null);
        setIsLoading(true); // Nastavíme načítání na true

        try {
            // 5. Volání The Cat API pomocí fetch
            const apiKey = "TVŮJ_API_KLÍČ_ZDE"; // **SEM VLOŽ SVŮJ API KLÍČ, POKUD HO BUDEŠ MÍT** (pro TheCatAPI není vždy nutný, pro jiné API může být povinný)
            const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${searchQuery}`; // API endpoint s dynamickým searchQuery

            const response = await fetch(apiUrl);

            if (!response.ok) {
                // Kontrola, zda je response OK (status 200-299)
                throw new Error(`Chyba HTTP: ${response.status}`);
            }

            const data = await response.json(); // Převedení response na JSON

            if (data && data.length > 0 && data[0].url) {
                // Kontrola, zda API vrátilo data a URL obrázku
                setCatImageUrl(data[0].url); // Nastavení URL obrázku do stavu
            } else {
                setError("Obrázek kočky nenalezen pro zadané plemeno."); // Nastavení chyby, pokud API nevrátí obrázek
            }
        } catch (error) {
            console.error("Chyba při volání API:", error);
            setError(
                "Nepodařilo se načíst obrázek kočky. Zkuste to prosím znovu později."
            ); // Nastavení obecné chyby
        } finally {
            setIsLoading(false); // Nastavíme načítání na false, ať už API volání skončí úspěchem nebo chybou
        }
    };

    return (
        <div className="catImageFinder">
            <h1>Hledání obrázků koček</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="breed">
                    Zadejte plemeno kočky (např. bengal, siamese):
                </label>
                <input
                    type="text"
                    id="breed"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Plemeno kočky"
                />
                <button type="submit">Hledej kočku!</button>
            </form>
            {isLoading && <p>Načítám obrázek...</p>}{" "}
            {/* Zobrazení "Loading..." během načítání */}
            {error && <p className="error">{error}</p>}{" "}
            {/* Zobrazení chybové zprávy, pokud nastane chyba */}
            {catImageUrl && (
                <div className="imageContainer">
                    <h2>Tady je kočka!</h2>
                    <img
                        src={catImageUrl}
                        alt="Obrázek kočky"
                        className="catImage"
                    />
                </div>
            )}
        </div>
    );
};

export default CatImageFinder;