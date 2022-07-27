import {useRef} from 'react';

const ProfilePage = ({user, setUser}) => {
    const urlRef = useRef()
    const passOneRef = useRef()

    function setImage() {
        const myUser = {...user}
        myUser.image = urlRef.current.value
        setUser(myUser)
    }

    function changePass() {
        const myUser = {...user}
        myUser.password = passOneRef.current.value
        setUser(myUser)
    }

    

    return (
        <div>
            <img className='profile' src={user.image} alt=""/>
            <input ref={urlRef} type="text" placeholder="image url"/>
            <button onClick={setImage}>Change Image</button>
            <input ref={passOneRef} type="text" placeholder="Change password" />
            <button onClick={changePass}>Change password</button>
            <h1>{user.name}</h1>
        </div>
       
    );
};



export default ProfilePage;