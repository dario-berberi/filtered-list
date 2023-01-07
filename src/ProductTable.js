import CategoryRow from './CategoryRow';
import ProductRow from './ProductRow';

function ProductTable({ products, filterText, inStockOnly }) {
  //create an empty array in order to populate it from products porp and order the items in the order which they will be displayed
  const rows = [];
  //lastCategory is used to skip adding the category from props and section the items depending on their category
  let lastCategory = null;

  //use forEach since we will modify the order the propducts will be displayed
  products.forEach((product) => {
    /*if statement to display only items that contain the characters typed in the search text area
      if none of the product names matches the index will result in -1 therefore we wont display anything to the screen  */
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    //if stockonly is true but the product is out of stock (stocked value is false) then they will NOT be displayed
    if (inStockOnly && !product.stocked) {
      return;
    }
    /*since we declare last category as null the first product category will be displayed 
    but the others with the same category will just be pushed to the rows array as the name property only 
    this will organize rows in category first followed by product names and prices after
    when we find a new category then the new category will be pushed to the rows array

    !!! this approach works since PRODUCTS in data.js are sorted by catoegory 
    otherwise it would display the category everytime two products differ
    needs to be optimized !!!
    */
    if (product.category !== lastCategory) {
      rows.push(<CategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <div className="product-table">
      <h2 className="header">Name</h2>
      <h2 className="header">Price</h2>
      <div className="products-wrap">{rows}</div>
    </div>
  );
}

export default ProductTable;
