import React, {useState} from 'react';
import {Link} from "react-router-dom";
import firebase from 'firebase';
import {useDispatch} from "react-redux";
import {addLogin, switchAuthVar} from "../../store/Login";

export const Login = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handlePassChange = (e) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        debugger
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password)
            await dispatch(addLogin(firebase.auth().currentUser.email))
            await dispatch(switchAuthVar(true))
        } catch (e) {
            setError(e);
        }
    };


    return (
        <div className="padding020">
            <form onSubmit={handleSubmit}>
                <p>Введите ваши учетные данные</p>
                <div>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        onChange={handleEmailChange}
                        value={email}
                    />
                </div>
                <div>
                    <input
                        placeholder="Password"
                        name="password"
                        onChange={handlePassChange}
                        value={password}
                        type="password"
                    />
                </div>
                <div>
                    {error && <p>{error.toString()}</p>}
                    <button type="submit"  >Login</button>
                </div>
                <hr/>
                <p>
                    Нет учетной записи? <Link to="/signup">Создай сейчас</Link>
                </p>
            </form>
        </div>
    );
}