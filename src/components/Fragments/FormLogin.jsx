import Button from "../Elements/Button";
import InputLogin from "../Elements/Input";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault();// prevent page refresh
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    localStorage.setItem("email",event.target.email.value);
    localStorage.setItem("password",event.target.password.value);
    window.location.href = "/products";
  }
  return (
    <form onSubmit={handleLogin}>
      <InputLogin label="Email" name="email" type="text" placeholder="gpa@gmail.com"/>
      <InputLogin label="Password" name="password" type="password" placeholder="*******"/>
      <Button variant="bg-blue-500 w-full" type="submit">
        Login
      </Button>
    </form>
  );
}

export default FormLogin