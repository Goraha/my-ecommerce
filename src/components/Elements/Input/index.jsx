import Label from "./Label.jsx";
import Input from "./Input.jsx";


const InputLogin = (props) => {
const {label,name,type,placeholder} = props;
  return (
    <div className="mb-6">
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder}/>
    </div>
  );
};
export default InputLogin