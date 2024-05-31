import { Fragment } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button";

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

const email = localStorage.getItem("email");

const ProductsPage = ()=>{
  const handleLogout = ()=>{
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
return(
  <Fragment>
    <div className="flex justify-end h-20 bg-black text-white items-center px-10">
      {email}
      <Button variant="bg-red-500" onClick={handleLogout}>Logout</Button>
    </div>
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
  </Fragment>
)
}

export default ProductsPage