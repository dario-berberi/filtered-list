import PRODUCTS from './data';
import { useState } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function App() {
  //filterText state for the search input in order to display correct items
  const [filterText, setFilterText] = useState('');
  //inStockOnly state for the checked box to display items that are in stock only
  const [inStockOnly, setInStockOnly] = useState(false);

  /*
  function for handle in stock only checkbox buy remembering previous state
  function check(){
    setInStockOnly(prevstate => !prevstate)
  }*/

  return (
    <div className="app-wrap">
      {/*pass state as props in order to change state from the component on change and click*/}
      <SearchBar
        filteredText={filterText}
        inStockOnly={inStockOnly}
        handleFilter={setFilterText}
        handleStock={setInStockOnly}
        /* pass the check fucntion as a prop
        handleStock={()=>check()}*/
      />
      {/*PRODUCTS its the data array we pass it as a prop unchanged because we need it in product rows and categories*/}
      <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
}

export default App;
