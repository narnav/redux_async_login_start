import React from 'react'
import { useSelector } from 'react-redux';
import {selectUserName, selectauthenticated} from './counterSlice';

const Greet = () => {
    const authenticated = useSelector(selectauthenticated);
    const UserName = useSelector(selectUserName);

    return (
        <div>Greet
            {authenticated && " Welcome " + UserName}
        </div>
    )
}
export default Greet