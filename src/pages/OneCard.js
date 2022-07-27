import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const OneCard = ({posts, users}) => {

    const {id} = useParams()
    const nav = useNavigate()

    const myPost = () => {
        return posts.find(x => x.id === Number(id))
    }

    const myUser = () => {
        const post = posts.find(x => x.id === Number(id))
        return users.find(x => x.email === post.userEmail)
    }

    function conversation() {
        nav('/conversations')
        console.log(nav)
    }


    return (
        <div className="d-flex">
            <div className="grow1">
                <img src={myPost().image} alt=""/>
            </div>
            <div className="grow1">
                <img src={myPost().profile} alt="" />
                <h3>{myPost().phone}</h3>
                <h3>{myPost().location}</h3>
                <h1>{myPost().id}</h1>

                <div>
                    
                    <h1>{myUser().name}</h1>
                    <button onClick={conversation}>Send Message</button>
                </div>
            </div>
        </div>
    );
};

export default OneCard;