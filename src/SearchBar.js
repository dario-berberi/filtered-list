function SearchBar({ filterText, inStockOnly, handleFilter, handleStock }) {
  //distruct the props to be easier to use thats why we use the "{ }"
  return (
    <div className="searchbar-wrap">
      <div className="intro">
        <h2>Filtered list</h2>
        <h4>Search for the products you need and check their availabilty</h4>
      </div>
      <form className="form-wrap">
        {/**value should be connected to state and updated on change controlled form inputs */}
        <input
          type={'text'}
          value={filterText}
          placeholder="Search..."
          className="search-input"
          //we handle change on the text input in order to display only the items in the text
          onChange={(e) => handleFilter(e.target.value)}
        />
        <label className="check-label">
          {/*controlled checkbox initialised as flase from the state */}
          <input
            type={'checkbox'}
            checked={inStockOnly}
            //change the state depending on the event to display only the items in stock
            onChange={(e) => handleStock(e.target.checked)}
            /* if we use the function declared in App.js onChange would pass the handleStock porp directly since its a function
            onChange={handleStock}*/
          />
          Only show products in stock
        </label>
      </form>
    </div>
  );
}

export default SearchBar;
