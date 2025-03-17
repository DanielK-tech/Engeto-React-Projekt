/*
    Daniel Kolegar
    dancek.kolegar@gmail.com
    Discord: Daniel K, (KoliDJ)
*/
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";


/**Komponenty */
import  ApiSection  from "./pages/ApiSection"; //
import PageNotFound from "./pages/PageNotFound"; 
import HomePage from "./pages/HomePage";


 //Hlavní komponenta aplikace
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/api" element={<ApiSection />} />
                <Route path="/api/seznam" element={<ApiSection />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    );
};
export default App;
