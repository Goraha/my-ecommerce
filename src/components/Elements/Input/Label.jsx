
const Label = (props) => {
  const { htmlFor,children }= props;
  return (
    <label htmlFor={htmlFor} className="block text-slate-500 font-medium text-sm font-bold mb2">{children}</label>
  )
}

export default Label