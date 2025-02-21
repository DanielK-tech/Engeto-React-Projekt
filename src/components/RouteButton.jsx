import React from "react";
import { useLocation, Link } from "react-router-dom";

const RouteButton = () => {
    const location = useLocation();
        
    const isApiRoute = location.pathname === "/api";
    const destination = isApiRoute ? "/" : "/api";
    const buttonText = isApiRoute
        ? "Zpět na domovskou stránku"
        : "Přejít na API";

    return (
        <Link to={destination}>
            <button className="button">{buttonText}</button>
        </Link>
    );
};

export default RouteButton;
