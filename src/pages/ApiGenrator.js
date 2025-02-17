import React, { useState, useEffect } from "react";
import "./ApiGenrator.css";

const CatBreedList = () => {
    const [breeds, setBreeds] = useState([]); // Stav pro uložení seznamu plemen
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fetchBreeds = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    "https://api.thecatapi.com/v1/breeds"
                );
                if (!response.ok) {
                    throw new Error(`Chyba HTTP: ${response.status}`);
                }
                const data = await response.json();
                setBreeds(data); // Uložení seznamu plemen do stavu
            } catch (error) {
                console.error("Chyba při načítání plemen:", error);
                setError("Nepodařilo se načíst seznam plemen koček.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchBreeds();
    }, []);

      const toggleList = () => {
          setIsVisible(!isVisible);
      };

    if (isLoading) {
        return <p>Načítám seznam plemen...</p>;
    }

    if (error) {
        return <p className="error">{error}</p>;
    }

    return (
        <div className="catBreedList">
            <h1>Seznam plemen koček</h1>
            <p className="intro">
                Zde je seznam plemen koček, které by měly fungovat ve
                vyhledávání. Pro vyhledání obrázku zadejte{" "}
                <strong>ID plemene</strong> (např. `beng` pro Bengal, `siam` pro
                Siamese) do formuláře v předchozí komponentě.
            </p>
            <button onClick={toggleList} className="toggleButton">
                {isVisible ? "Skrýt seznam" : "Zobrazit seznam"}
            </button>
            {isVisible && (
                <ul className="breeds">
                    {breeds.map((breed) => (
                        <li key={breed.id} className="breed-item">
                            <h3>{breed.name}</h3>
                            <p>
                                <strong>ID plemene:</strong>{" "}
                                <code>{breed.id}</code>
                            </p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CatBreedList;
