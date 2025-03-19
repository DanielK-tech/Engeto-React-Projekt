/** Komponenta o informacích o zvířatech **/
import "../styles/petsInfo.css";
import  { useState } from "react";
/** data */
import buttonTextsData  from "../data/buttonTextData";

const PetsInfo = () => {    
const [activeButtonIndex, setActiveButtonIndex] = useState(0);

    const [articleText, setArticleText] = useState(
        buttonTextsData[0].articleText
    );
    const [articleTitle, setArticleTitle] = useState(
        buttonTextsData[0].buttonLabel
    ); 

    
    const handleButtonClick = (index) => {
        setArticleText(buttonTextsData[index].articleText); 
        setArticleTitle(buttonTextsData[index].buttonLabel); 
        setActiveButtonIndex(index); 
    };

    return (
        <div className="PetsInfo">
            <div className="buttonsContainer">
                {buttonTextsData.map((button, index) => (
                    <button
                        className={`button ${
                            index === activeButtonIndex ? "active" : ""
                        }`}
                        key={button.id}
                        onClick={() => handleButtonClick(index)}
                    >
                        {button.buttonLabel}
                    </button>
                ))}
            </div>
            <article className="articleInfo">
                <h2>{articleTitle}</h2> {articleText}
            </article>
        </div>
    );
};

export default PetsInfo