import styles from "./Form.module.css"
import { useState } from "react";
import React from "react";
import validation from "./validation";


export default function Form({login}) {

    const [userData, setUserData] = React.useState({
        username: "",
        password: ""
    });

    const [errors, setErrors] = React.useState({
        username: "",
        password: ""
    });

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        
        setErrors( validation({
          ...userData,
          [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      login(userData);
    }

    return (
        <form onSubmit ={handleSubmit}>
            <label htmlFor="username">Usuario: </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username &&  <p>{errors.username}</p>}  {/*renderizo los errores*/}

            <label htmlFor="password">Password: </label>
            <input type="password" name="password" value={useState.password} onChange={handleInputChange} />
            {errors.password &&  <p>{errors.password}</p>} {/*renderizo los errores*/}

            <button>Login</button>
        </form>
    )
}


