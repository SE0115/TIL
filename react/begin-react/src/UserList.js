import React, { useContext } from 'react'
import { userDispatch } from './App'

function User({ user }) {
    const { username, email, id, active } = user
    const dispatch = useContext(userDispatch)

    return (
        <div>
            <b 
                style={{
                    color: active ? 'blue' : 'black',
                    cursor: 'pointer'
                }} 
                onClick={() => dispatch({ 
                    type: 'TOGGLE_USER', 
                    id 
                })}
            >
                {username}
            </b>
            <span>({email})</span>
            <button onClick={() => dispatch({
                type: 'REMOVE_USER',
                id
            })}>삭제</button>
        </div>
    )
}

function UserList({ users }) {

    return (
        <div>
            {
                users.map(user => (<User user={user} key={user.id} />))
            }
        </div> 
    )
}

export default UserList