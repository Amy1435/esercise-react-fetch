const CountryCards = ({ countryName, flagUrl, population, capital }) => {
    return (
        <figure>
            <h2>Country: {countryName}</h2>
            <img src={flagUrl}></img>
            <p>Population: {population}</p>
            <p>Capital: {capital}</p>
        </figure>
    );
};

export default CountryCards;
