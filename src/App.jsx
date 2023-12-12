import { useState } from "react";
import "./App.css";
import CountryCards from "./CountryCard";

function App() {
    const [countryData, setCountryData] = useState([
        {
            countryName: "Italy",
            flagUrl:
                "https://www.mrflag.com/wp-content/uploads/2018/10/Italy-Flag-100x100.png",
            population: "59,11 milions",
            capital: "Rome",
        },
        {
            countryName: "Usa",
            flagUrl:
                "https://www.mrflag.com/wp-content/uploads/2018/10/USA-United-States-Flag-100x100.png",
            population: "331,9 milions",
            capital: "Washington",
        },
    ]);
    return (
        <>
            {countryData.map((country, i) => (
                <CountryCards
                    key={i}
                    countryName={country.countryName}
                    flagUrl={country.flagUrl}
                    population={country.population}
                    capital={country.capital}
                />
            ))}
        </>
    );
}

export default App;
