import React from "react";
import styles from "./Form.module.css";
import { useState} from "react";
import validation from "./validation.js"


export default function Form (props){
    const [userData, setUserData] = React.useState({
        username: "",
        password: "",
    })

    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })

    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setUserData({
            ...userData,
            [name]:value
        })
        
        setErrors(
            validation({
                ...userData,
                [name]:value
            })
        )
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.login(userData);
    }

    return(
        <div className={styles.divForm}>
            <form onSubmit={handleSubmit}>
                <label>Username</label>
                <input name="username" type="text" value={userData.username} onChange={handleInputChange}/>
                <p className={styles.error}>{errors.username && errors.username}</p>

                <label>Password</label>
                <input name="password" type="password" value={userData.password} onChange={handleInputChange}/>
                <p className={styles.error}>{errors.password && errors.password}</p>

                <button>Access</button>
            </form>
        </div>
    );
};