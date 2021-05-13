import React from "react";
import Button from "../shared/button";


const ProductTableItem = ({ product, handleEdit, handleRemove }) => {
   //linker til product og ikke admin/produkt siden den siden ikke var/er lagd.
  return (
    <tr>
{/*     <td><Link to={`admin/product/${product.sku}`}>{product.sku}</Link></td>
 */}    <td><img width="60px" src={product.imageUrl} alt={product.name}/> </td>
      <td>{product.name}</td>
      <td>{product.stockQuantity}</td>
      <td>{product.price} kr</td>
      <td></td>
      <td><Button secondary style={{width:'70px'}} label="edit" onClick={()=>handeEdit(product)}/></td>
{/*       <td><Button secondary style={{width:'60px'}} label="X"/></td>
 */}    </tr>
  );
};
// onClick={()=>handleEdit(product)}
// onClick={()=> handleRemove(product)}
export default ProductTableItem;
