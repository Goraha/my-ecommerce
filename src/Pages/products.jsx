import CardProduct from "../components/Fragments/CardProduct"


const ProductsPage = ()=>{
return(
  <div className="flex justify-center py-5">
    <CardProduct>
      <CardProduct.Header ImgUrl="./images/shoes-1.jpg"/>
      <CardProduct.Body title="Sepatu Baru">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
         deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?
      </CardProduct.Body>
      <CardProduct.Footer Price="1.000.000">
      </CardProduct.Footer>
    </CardProduct>
    <CardProduct>
      <CardProduct.Header ImgUrl="./images/shoes-1.jpg"/>
      <CardProduct.Body title="Sepatu Baru">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
         deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?
      </CardProduct.Body>
      <CardProduct.Footer Price="1.000.000">
      </CardProduct.Footer>
    </CardProduct>
  </div>
)
}

export default ProductsPage