import {useRef} from 'react';
import {useNavigate} from "react-router-dom"

const RegisterPage = ({addNewUser}) => {
    const usernameRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()

    const nav = useNavigate()

    const validatepass = (passOne) => {
        return String(passOne)
            .match(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{4,20}$/
            );
    };

    function registerUser() {
        const user = {
            name: usernameRef.current.value,
            passOne: passOneRef.current.value,
            passTwo: passTwoRef.current.value
        }
        let formValid = true

        if ( user.name.length < 3 || user.name.length > 20 ) formValid = false
        if (!validatepass(user.passOne) ) formValid = false
        if(user.passOne !== user.passTwo) formValid = false

        if(!formValid) return alert ("Bad registration!")
        

        addNewUser(user)
        nav('/')
    }

    return (
        <div className="d-flex flex-column">
            <input ref={usernameRef} type="text" placeholder="Username"/>
            <input ref={passOneRef} type="text" placeholder="Password1"/>
            <input ref={passTwoRef} type="text" placeholder="Password2"/>

            <button onClick={registerUser}>Register</button>
        </div>
    );
};

export default RegisterPage;