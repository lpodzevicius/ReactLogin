import {useNavigate} from "react-router-dom";

const Single = ({post}) => {
    const nav = useNavigate()

    return (
        <div className="post" onClick={() => nav('/single/'+post.id)}>
            <img src={post.profile} alt=""/>
            <h3>{post.phone}</h3>
            <div>{post.location}</div>
            <div>{post.userEmail}</div>
        </div>
    );
};

export default Single;