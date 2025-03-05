
import { Link } from "react-router-dom";
//Chtěl jsem zkusit jestli opravdu funguje bootstrap, který se prý automaticky nahrnul do apky při vytvoření

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4 not-found">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full container-of-page">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Stránka nenalezena
                </h2>
                <p className="text-gray-600 mb-6">
                    Omlouváme se, ale požadovaná stránka neexistuje nebo byla
                    přesunuta.
                </p>
                <Link
                    to="/"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Zpět na hlavní stránku
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
