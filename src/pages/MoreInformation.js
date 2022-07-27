import {useRef} from 'react';
import {useNavigate} from "react-router-dom";

const MoreInformation = ({user, posts, setPosts}) => {
    const profileRef = useRef()
    const phoneRef = useRef()
    const locationRef = useRef()

    const nav = useNavigate()

    function create() {
        const post = {
            profile: profileRef.current.value,
            phone: phoneRef.current.value,
            location: locationRef.current.value,
            id: Date.now(),
            userEmail: user.email
        }

        setPosts([...posts, post])
        nav('/allPosts')
    }

    return (

        <div className="d-flex flex-column">
            <input ref={profileRef} type="text" placeholder="Profile picture"/>
            <input ref={phoneRef} type="text" placeholder="Phone"/>
            <input ref={locationRef} type="text" placeholder="Location"/>

            <button onClick={create}>Confirm information</button>
        </div>
    );
};

export default MoreInformation;