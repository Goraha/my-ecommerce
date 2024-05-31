import Button from "../Elements/Button"

const CardProduct = (props) => {
	const {children} = props
	return (
		<div className="w-full max-w-sm mx-2 bg-gray-500 border border-rounded rounded-lg shadow">
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
	<div className="px-5 pb-5">
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
	const {Price} = props
	return (
		<div className="flex item-center justify-between px-5 pb-5">
			<span className="text-xl font-bold text-white">Rp. {Price}</span>
			<Button variant="bg-blue-500">Add to cart</Button>
		</div>
	)
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer

export default CardProduct