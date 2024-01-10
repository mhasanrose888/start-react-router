import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h3>Friend Detail Page</h3>
            <h4>{friend.name}</h4>
            <h5> Phone number: {friend.phone}</h5>
        </div>
    );
};

export default FriendDetails;