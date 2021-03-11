import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { setUser } from "../state/user";
import { useDispatch } from "react-redux";
import Login from "../components/Login";

const FormLoginContainer = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    if (e.target.name === "nombre") setNombre(e.target.value);
    if (e.target.name === "email") setEmail(e.target.value);
    if (e.target.name === "password") setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/login`, { email }).then((user) => {
      dispatch(setUser(user.data));
      console.log(nombre);

      return history.push("/home", user.data);
    });
  };

  return <Login handleChange={handleChange} handleSubmit={handleSubmit} />;
};

export default FormLoginContainer;
