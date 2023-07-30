
import "../styles/Auth.css";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {toast} from "react-toastify";
import axios from "axios";
import NavMenu from "./NavMenu";

const Signup = () => {

  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState({
    password1: false,
    password2: false,
  });

  const handleShowPassword = (password) => {
    setIsPasswordVisible({
      ...isPasswordVisible,
      [password]: !isPasswordVisible[password],
    });
  };

  const signUpUser = async (userData) => {
    const {firstName, lastName, email, password} = userData;
    try {
      const response = await axios.post("api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      });
      const userData = {
        firstName: signUpData.firstName,
        lastName: signUpData.lastName,
        email: signUpData.email,
      };
      localStorage.setItem("token", response.data.encodedToken);
      localStorage.setItem("userData", JSON.stringify(userData));
      toast.success("Successfully Signed In");
      navigate("/");
    } catch (err) {
      toast.error("Error in signup");
      console.error("SignUp", err);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (signUpData.password === signUpData.confirmPassword) {
      signUpUser(signUpData);
    } else {
      toast.error("Passwords should match");
    }
  };

  const handleTestInput = () => {
    setSignUpData({
      firstName: "Jhon",
      lastName: "Doe",
      email: "jhondoe@gmail.com",
      password: "jhon@123",
      confirmPassword: "jhon@123",
    });
  };
  return (
    <section className="app-ctn" style = {{display:'grid',gridTemplateColumns:'1fr 4fr'}}>
        <div className="signup-section">
            <NavMenu />
        </div>
          <div>
            <form className="br-md auth-form" onSubmit={handleSignUp}>
              <h2 className="text-center mg-bottom-md">Signup</h2>
              <div className="form-control">
                <label htmlFor="first-name" className="fw-bold">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  placeholder="first name"
                  autoComplete="off"
                  required
                  value={signUpData.firstName}
                  onChange={(e) =>
                    setSignUpData((prev) => ({...prev, firstName: e.target.value}))
                  }
                />
              </div>
              <div className="form-control">
                <label htmlFor="last-name" className="fw-bold">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  placeholder="last name"
                  autoComplete="off"
                  required
                  value={signUpData.lastName}
                  onChange={(e) =>
                    setSignUpData((prev) => ({...prev, lastName: e.target.value}))
                  }
                />
              </div>
              <div className="form-control">
                <label htmlFor="email" className="fw-bold">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@gmail.com"
                  autoComplete="off"
                  required
                  value={signUpData.email}
                  onChange={(e) =>
                    setSignUpData((prev) => ({...prev, email: e.target.value}))
                  }
                />
              </div>
              <div className="form-control">
                <label htmlFor="password" className="fw-bold">
                  Password
                </label>
                <input
                  type={isPasswordVisible.password1 ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
                  required
                  value={signUpData.password}
                  onChange={(e) =>
                    setSignUpData((prev) => ({...prev, password: e.target.value}))
                  }
                />
                <span
                  className="hide-password cursor-pointer"
                  onClick={() => handleShowPassword("password1")}
                >
                  {isPasswordVisible.password1 ? (
                    <span className="material-icons">visibility_off</span>
                  ) : (
                    <span className="material-icons">visibility</span>
                  )}
                </span>
              </div>
              <div className="form-control">
                <label htmlFor="confirm-password" className="fw-bold">
                  Confirm password
                </label>
                <input
                  type={isPasswordVisible.password2 ? "text" : "password"}
                  id="confirm-password"
                  name="confirm-password"
                  placeholder="&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;&lowast;"
                  required
                  value={signUpData.confirmPassword}
                  onChange={(e) =>
                    setSignUpData((prev) => ({
                      ...prev,
                      confirmPassword: e.target.value,
                    }))
                  }
                />
                <span
                  className="hide-password cursor-pointer"
                  onClick={() => handleShowPassword("password2")}
                >
                  {isPasswordVisible.password2 ? (
                    <span className="material-icons">visibility_off</span>
                  ) : (
                    <span className="material-icons">visibility</span>
                  )}
                </span>
              </div>
              <div className="form-control">
                <input
                  type="checkbox"
                  id="terms-condition"
                  name="checkbox"
                  required
                />
                <label htmlFor="terms-condition" className="fw-bold">
                  I accept all Terms & Conditions
                </label>
              </div>
              <div className="form-control">
                <button className="btn btn-primary">Create New Account</button>
              </div>
              <div className="form-control">
                <button
                  type="button"
                  className="btn btn-primary-outline"
                  onClick={handleTestInput}
                >
                  Fill test credentials
                </button>
              </div>
              <div className="account-toggle fw-bold">
                <Link to="/login">
                  Already have an account{" "}
                  <span className="material-icons fw-bold">chevron_right</span>
                </Link>
              </div>
            </form>
          </div>
    </section>
  );
}

export default Signup 
