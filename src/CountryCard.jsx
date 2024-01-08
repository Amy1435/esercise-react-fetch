const CountryCards = ({ countryName, flagUrl, population, capital }) => {
    return (
        <div className="card-container">
            <div className="country-name">
                <h2>{countryName}</h2>
            </div>

            <img src={flagUrl} alt="country-flag"></img>
            <div className="country-info-container">
                <p>
                    <strong>Population: </strong>
                    {population} people
                </p>
                <p>
                    <strong>Capital: </strong>
                    {capital}
                </p>
            </div>
        </div>
    );
};

export default CountryCards;
