import Button from "../Elements/Button"

const CardProduct = (props) => {
	const {children} = props
	return (
		<div className="w-full max-w-xs mx-2 bg-gray-500 border border-rounded rounded-lg shadow mx-2 
		flex flex-col justify-between">
      {children}
    </div>
	)
}

const Header = (props) => {
	const {ImgUrl} = props
	return(
		<a href="#">
			<img src={ImgUrl} alt="product" className="p-8 rounded-t-lg"/>
		</a>
	)
}

const Body = (props) => {
	const {title,children} = props
	return (
	<div className="px-5 pb-5 h-full">
		<a href="#">
			<h5 className="text-3xl font-semibold text-white">
				{title}
			</h5>
			<p className="text-m text-white">
				{children}
			</p>
		</a>
	</div>
	)
}

const Footer = (props) => {
	const {Price,id,handleAddtoCart} = props
	return (
		<div className="flex item-center justify-between px-5 pb-5">
			<span className="text-xl font-bold text-white">{Price.toLocaleString('id-ID',{style:'currency',currency:'IDR'})}</span>
			<Button variant="bg-blue-500" onClick={() => handleAddtoCart(id)}>Add to cart</Button>
		</div>
	)
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct