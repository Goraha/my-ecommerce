const Button = (props) => {
  const { children=".....", variant="bg-red" } = props;
  return (
    <button className={`${variant} hover:bg-gray-700 text-white font-bold py-2 px-4 rounded`}>
      {children}
    </button>
  )
}

export default Button