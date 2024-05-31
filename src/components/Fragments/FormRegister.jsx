import Button from "../Elements/Button";
import InputLogin from "../Elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputLogin label="Fullname" name="fullname" type="text" placeholder="insert your full name.."/>
      <InputLogin label="email" name="email" type="text" placeholder="gpa@gmail.com"/>
      <InputLogin label="Password" name="password" type="password" placeholder="*******"/>
      <InputLogin label="Password" name="confirm_password" type="password" placeholder="*******"/>
      <Button variant="bg-blue-500 w-full">Login</Button>
    </form>
  );
}

export default FormRegister