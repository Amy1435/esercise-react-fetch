import { useState } from "react";
import "./App.scss";
import CountryCards from "./CountryCard";
import { useEffect } from "react";
import SearchBar from "./SearchBar";

function App() {
    const [countryData, setCountryData] = useState();
    const [searchValue, setSearchValue] = useState("");

    const fetchPost = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all"); // fetch e' una promise, quando e' risolta ci ritorna una response
        const obj = await response.json(); //response.json() ritorna una promise, che ritorna un oggetto
        console.log(obj);
        setCountryData(obj);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const onSearch = async () => {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const obj = await response.json();

        setCountryData(obj);
    };

    return (
        <>
            <SearchBar
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={onSearch}
            />
            <div className="country-data-container">
                {countryData &&
                    countryData.map((country, i) => (
                        <CountryCards
                            key={i}
                            countryName={country.name.common}
                            flagUrl={country.flags.png}
                            population={country.population}
                            capital={country.capital}
                        />
                    ))}
            </div>
        </>
    );
}

export default App;
