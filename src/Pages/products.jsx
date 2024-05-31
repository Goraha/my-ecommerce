import CardProduct from "../components/Fragments/CardProduct"

const products = [
  {
    id: 1,
    title: "Sepatu Nike",
    price: "1.000.000",
    image: "./images/shoes-1.jpg",
    desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
    deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?`,
  },
  {
    id: 2,
    title: "Sepatu Adidas",
    price: "2.000.000",
    image: "./images/shoes-1.jpg",
    desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
    deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?`,
  },
  {
    id: 3,
    title: "Sepatu Puma",
    price: "3.000.000",
    image: "./images/shoes-1.jpg",
    desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
    deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?`,
  }
]

const ProductsPage = ()=>{
return(
  <div className="flex justify-center py-5">
    {products.map((product)=>(
      <CardProduct key={product.id}>
        <CardProduct.Header ImgUrl={product.image}/>
        <CardProduct.Body title={product.title}>
          {product.desc}
        </CardProduct.Body>
        <CardProduct.Footer Price={product.price}>
        </CardProduct.Footer>
      </CardProduct>
    ))}
  </div>
)
}

export default ProductsPage