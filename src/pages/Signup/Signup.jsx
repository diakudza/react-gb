import {useState} from "react";
import firebase from "firebase";
import {Link} from "@material-ui/core";

export const Signup = () => {
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
        setError("");

        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='padding020'>
            <h2>Страница создания учетной записи</h2>
            <form onSubmit={handleSubmit}>
                <p>Заполните поля для регитрации нового пользователя</p>
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
                    {error && <p>{error}</p>}
                    <button type="submit">Зарегистрироваться</button>
                </div>
                <hr/>
                <p>
                   Уже есть учетная запись? <Link to="/login">Зайти</Link>
                </p>
            </form>
        </div>
    )
}