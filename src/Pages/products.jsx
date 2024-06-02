import { Fragment,useState } from "react"
import CardProduct from "../components/Fragments/CardProduct"
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    title: "Sepatu Nike",
    price: 1000000,
    image: "./images/shoes-1.jpg",
    desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
    deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?`,
  },
  {
    id: 2,
    title: "Sepatu Adidas",
    price: 2000000,
    image: "./images/shoes-1.jpg",
    desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
    deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?`,
  },
  {
    id: 3,
    title: "Sepatu Puma",
    price: 3000000,
    image: "./images/shoes-1.jpg",
    desc:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maiores dolores, reprehenderit ipsa iure natus possimus tempore,
    deleniti dolore dignissimos ad laborum consectetur harum hic sed fugit commodi eum rem?`,
  }
]

const email = localStorage.getItem("email");

const ProductsPage = ()=>{
  const [cart, setCard] = useState([
    {
      id:1,
      name:"Sepatu Adidas",
      qty:1,
    }
  ]);
  const handleAddtoCart = (id)=>{
    if(cart.find(item => item.id === id)){
      setCard(
        cart.map(item => item.id === id ? {...item,qty:item.qty + 1} : item)
      )
    }else{
      setCard([
        ...cart,
        {
          id:id,
          qty:1,
        }
      ])
    }
  }
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
      <div className="flex flex-wrap w-3/4 ">
        {products.map((product)=>(
          <CardProduct key={product.id}>
            <CardProduct.Header ImgUrl={product.image}/>
            <CardProduct.Body title={product.title}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer Price={product.price} id={product.id} handleAddtoCart={handleAddtoCart}>
            </CardProduct.Footer>
          </CardProduct>
        ))}
      </div>
      <div className="w-1/4">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Card</h1>
        <table className="text-left table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item) =>{
              const product = products.find((product) => product.id === item.id)
                return(
                  <tr key={item.id}>
                    <td>{product.title}</td>
                    <td>{product.price.toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</td>
                    <td>{item.qty}</td>
                    <td>{(item.qty  * product.price).toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</td>
                  </tr>
                )
              })
              
            }
          </tbody>
        </table>
      </div>
  </div>
  </Fragment>
)
}

export default ProductsPage