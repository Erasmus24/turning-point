const SearchBar = ({ setSearchQuery }) => {
    return (
      <input
        type="text"
        placeholder="Search jobs..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    );
  };
  
  export default SearchBar;