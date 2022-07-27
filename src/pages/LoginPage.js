import {useRef, } from 'react';
import {useNavigate} from "react-router-dom";

const LoginPage = ({users, setUser}) => {
    const usernameRef = useRef()
    const passOneRef = useRef()

    const nav = useNavigate()

    function loginUser() {
        
        const user = {
            name: usernameRef.current.value,
            password: passOneRef.current.value,
        }

        const myUser = users.find(x => x.name === user.name && x.password === user.password)

        if(!myUser) return alert("Bad username or password")

        setUser(myUser)
        nav("/profile")
    }

    return (
        <div className="d-flex flex-column">
            <input ref={usernameRef} type="text" placeholder="Username"/>
            <input ref={passOneRef} type="text" placeholder="Password"/>
            <button onClick={loginUser}>Login</button>
        </div>
    );
};

export default LoginPage;