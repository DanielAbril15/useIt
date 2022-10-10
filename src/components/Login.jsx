import React from "react";
import "./styles/login.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/user.slice";

const Login = ({ handleCloseLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const defaultValues = {
    email: "",
    password: "",
  };

  const submit = (data) => {
    const URL =
      "https://7600366f-c066-48d9-bc74-53d5007a66dc.mock.pstmn.io/login";

    axios
      .post(URL, data)
      .then((res) => {
        if (
          res.data.find(
            (user) =>
              user.email === data.email && user.password === data.password
          )
        ) {
          const user = res.data.find((user) => user.email === data.email);
          localStorage.setItem("token", user);
          if (
            data.email === "superadmin@gmail.com" ||
            data.email === "admin@gmail.com"
          ) {
            navigate("/admin");
          } else {
            navigate("/employee");
          }
          dispatch(setUser(user));
        } else {
          console.log("404");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="login-form">
      <i onClick={handleCloseLogin} className="fa-solid fa-xmark"></i>
      <h2>Welcome</h2>

      <label htmlFor="email">Email</label>
      <input type="email" id="email" {...register("email")} />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" {...register("password")} />

      <button>Send</button>
    </form>
  );
};

export default Login;
