const SearchBar = ({ value, onChange, onSearch }) => {
    return (
        <div className="search-container">
            <h1>Search Countries by Name:</h1>
            <div className="search-input-container">
                <input value={value} onChange={onChange} />
                <button onClick={onSearch}>Search</button>
            </div>
        </div>
    );
};

export default SearchBar;
