const Button = (props) => {
  const { children, variant="bg-red", onClick=() => {}, type="button"} = props;
  return (
    <button className={`${variant} hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}
    type={type}
    onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button