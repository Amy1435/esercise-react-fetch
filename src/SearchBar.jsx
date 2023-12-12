const SearchBar = ({ value, onChange, onSearch }) => {
    return (
        <div>
            <input value={value} onChange={onChange} />
            <button onClick={onSearch}>Find country</button>
        </div>
    );
};

export default SearchBar;
