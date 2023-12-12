import "./App.css";
import CountryCards from "./CountryCard";

function App() {
    return (
        <CountryCards
            countryName={"italy"}
            flagUrl={
                "https://www.mrflag.com/wp-content/uploads/2018/10/Italy-Flag-100x100.png"
            }
            population={"59,11 milioni"}
            capital={"Rome"}
        />
    );
}

export default App;
