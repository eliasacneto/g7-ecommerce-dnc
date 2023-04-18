import { useParams } from "react-router-dom"
import ProductDetails from "../../components/ProductDetails/ProductDetails";

import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


const Products = ({data}) => {
  const { productId} = useParams();
  const selectedProduct = data.find((product) => product.id == productId);
  console.log(selectedProduct)

  return (
    <>
      <Navbar />
      <ProductDetails data={selectedProduct} />
      <Footer />
    </>
  )
}

export default Products;