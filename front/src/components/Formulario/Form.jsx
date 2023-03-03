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
        <form className={styles.container} onSubmit ={handleSubmit}>
            <label className={styles.label1} htmlFor="username">Usuario: </label>
            <input className={styles.input1} type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username &&  <p className={styles.errUs} >{errors.username}</p>}  {/*renderizo los errores*/}

            <label className={styles.label2} htmlFor="password">Password: </label>
            <input className={styles.input2} type="password" name="password" value={useState.password} onChange={handleInputChange} />
            {errors.password &&  <p className={styles.errPas} >{errors.password}</p>} {/*renderizo los errores*/}

            <button className={styles.boton} >Login</button>
        </form>
    )
}


