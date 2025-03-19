import "../styles/api.css"; 
import React, { useState } from "react";


const CatImageFinder = () => {
    
    const [searchQuery, setSearchQuery] = useState("");    
    const [catImageUrl, setCatImageUrl] = useState(null);    
    const [error, setError] = useState(null);    
    const [isLoading, setIsLoading] = useState(false);

    
    const handleInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    
    const handleSubmit = async (event) => {
        event.preventDefault(); 

        
        setCatImageUrl(null);
        setError(null);
        setIsLoading(true); 

        try {
            
            const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${searchQuery}`; 

            const response = await fetch(apiUrl);

            if (!response.ok) {               
                throw new Error(`Chyba HTTP: ${response.status}`);
            }

            const data = await response.json(); 

            if (data && data.length > 0 && data[0].url) {
                
                setCatImageUrl(data[0].url); 
            } else {
                setError("Obrázek kočky nenalezen pro zadané plemeno."); 
            }
        } catch (error) {
            console.error("Chyba při volání API:", error);
            setError(
                "Nepodařilo se načíst obrázek kočky. Zkuste to prosím znovu později."
            ); 
        } finally {
            setIsLoading(false); 
        }
    };

    return (
        <div className="catImageFinder">
            <h1>Hledání obrázků koček</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="breed">
                    Zadejte plemeno kočky (např. abob, beng):
                </label>
                <input
                    type="text"
                    id="breed"
                    value={searchQuery}
                    onChange={handleInputChange}
                    placeholder="Plemeno kočky"
                />
                <button className="button" type="submit">
                    Hledej kočku!
                </button>
            </form>
            {isLoading && <p>Načítám obrázek...</p>}{" "}
            
            {error && <p className="error">{error}</p>}{" "}
            
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