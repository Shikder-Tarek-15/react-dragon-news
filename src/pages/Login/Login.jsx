import { Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { handleEmailPasswordLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  console.log("I am", location);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    console.log(form.get("email"));
    const email = form.get("email");
    const password = form.get("password");
    handleEmailPasswordLogin(email, password)
      .then(() => {
        toast.success("Login Successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="mx-auto ">
      <Navbar />
      <h2 className="text-2xl text-center my-5">This is Login</h2>

      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center pb-4">
          Do not have an account{" "}
          <Link className="font-bold text-blue-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
