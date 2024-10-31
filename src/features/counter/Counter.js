import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {loginAsync,selectUserName, selectauthenticated, selectToken} from './counterSlice';

export function Counter() {
    const UserName = useSelector(selectUserName);
    const authenticated = useSelector(selectauthenticated);
    const token = useSelector(selectToken);
    const dispatch = useDispatch();
    const [username, setusername] = useState("")
    const [password, setpwd] = useState("")
    return (
        <div>
            user<input onChange={(e) => setusername(e.target.value)} />
            pwd<input onChange={(e) => setpwd(e.target.value)} />
            <button onClick={() => dispatch(loginAsync({ username, password }))}> Login</button>
        </div>
    );
}
