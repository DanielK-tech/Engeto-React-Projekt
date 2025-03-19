
import { Link } from "react-router-dom";
// 
import "../styles/pageNotFound.css";

const NotFoundPage = () => {
    return (
        <div className=" not-found">
            <div className=" container-of-page">
                <h1 >404</h1>
                <h2 >
                    Stránka nenalezena
                </h2>
                <p >
                    Omlouváme se, ale požadovaná stránka neexistuje nebo byla
                    přesunuta.
                </p>
                <Link
                    to="/"
                   
                >
                    Zpět na hlavní stránku
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
