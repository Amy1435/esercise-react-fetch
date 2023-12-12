import { useState } from "react";
import "./App.css";
import CountryCards from "./CountryCard";
import { useEffect } from "react";
import SearchBar from "./SearchBar";

function App() {
    const [countryData, setCountryData] = useState();
    const [searchValue, setSearchValue] = useState("");

    const fetchPost = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const obj = await response.json();
        setCountryData(obj);
    };

    useEffect(() => {
        fetchPost();
    }, []);

    const fetchPostByValue = async () => {
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${searchValue}`
        );
        const obj = await response.json();
        setCountryData(obj);
    };

    const onSearch = async () => {
        await fetchPostByValue();
    };
    return (
        <>
            <SearchBar
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onSearch={onSearch}
            />
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
