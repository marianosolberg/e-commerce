import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUser } from "../state/user";
import { useDispatch } from "react-redux";
import Login from "../components/Login";

const FormLoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    return axios
      .post(`/api/login`, { email, password })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", res.data.user.nombre);
        localStorage.setItem("userId", res.data.user._id)
        localStorage.setItem("isAdmin", res.data.user.isAdmin);
        dispatch(setUser(res.data));
        return history.push("/");
      })
      .catch(() => alert("datos incorrectos, intente de nuevo"));
  };

  return <Login handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default FormLoginContainer;
