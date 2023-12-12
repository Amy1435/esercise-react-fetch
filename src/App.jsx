import { useState } from "react";
import "./App.css";
import CountryCards from "./CountryCard";
import { useEffect } from "react";

function App() {
    const [countryData, setCountryData] = useState();

    const fetchPost = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const obj = await response.json();
        setCountryData(obj);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    console.log(countryData);
    return (
        <>
            {countryData &&
                countryData.map((country, i) => (
                    <CountryCards
                        key={i}
                        countryName={country.altSpellings[1]}
                        flagUrl={country.coatOfArms.png}
                        population={country.population}
                        capital={country.capital}
                    />
                ))}
        </>
    );
}

export default App;
