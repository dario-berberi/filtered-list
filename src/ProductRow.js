function ProductRow({ product }) {
  //if the product stocked value is false then will display a red color to indicate it
  const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;
  return (
    <div className="product-row">
      <p className="product-name">{name}</p>
      <p className="product-price">{product.price}</p>
    </div>
  );
}

export default ProductRow;
