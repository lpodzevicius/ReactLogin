import React from 'react';
import Single from "../components/Single";

const All = ({posts}) => {
    return (
        <div className="d-flex flex-wrap">
            {posts.map(x => <Single key={x.id} post={x}/>)}
        </div>
    );
};

export default All;