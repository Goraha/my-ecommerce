import Button from "../Elements/Button";
import InputLogin from "../Elements/Input";

const FormLogin = () => {
  return (
    <form action="">
      <InputLogin label="Email" name="email" type="text" placeholder="gpa@gmail.com"/>
      <InputLogin label="Password" name="password" type="password" placeholder="*******"/>
      <Button variant="bg-blue-500 w-full">Login</Button>
    </form>
  );
}

export default FormLogin