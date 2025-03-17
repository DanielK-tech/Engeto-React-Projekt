import Api from "../pages/Api";
import ApiList from "../pages/ApiGenrator";
import RouteButton from "../components/RouteButton";

const ApiSection = () => {
    return (
        <div className="MainContainer">
            <h2>Kočíčí sekce</h2>
            <section className="ApiSection">
                <Api />
                <ApiList />
            </section>
            <RouteButton />
        </div>
    );
};
export default ApiSection;