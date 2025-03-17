/** styl */
import "./Pets.css";

const Pets = ({image, name, text}) => {
    return (
        <div className="Pets">
            <img src={image} className="PetsImage"></img>
            <h3 className="PetsName">{name}</h3>
            <p>{text}</p>
        </div>
    );
};

export default Pets;
