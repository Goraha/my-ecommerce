import { Link } from "react-router-dom"


const AuthLayouts = (props) => {
  const {children, title, type} = props
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen items-center">
      <div className="w-full max-w-xs">
          <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
          <p className="font-medium text-slate-500 mb-8">
            Please sign in to your account
          </p>
          {children}
          <p className="font-sm mt-5">
            {type==="login" ? "Don't Have an Account Please" : "Already Have an Account Please"}
            {type==="login" ? <Link to="/register" className="font-bold text-blue-500"> Sign Up</Link> : <Link to="/login" className="font-bold text-blue-500"> Login</Link>}
            
          </p>
        </div>
      </div>
  )
}

export default AuthLayouts