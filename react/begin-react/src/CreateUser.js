import React, { useRef, useContext } from 'react'
import { userDispatch } from './App'
import useInputs from './useInputs'

function CreateUser() {
    const [{ username, email }, onChange, reset ] = useInputs({
        username: '',
        email: ''
    })
    const dispatch = useContext(userDispatch)
    const nextId = useRef(4)

    const onCreate = () => {
        dispatch({
          type: 'CREATE_USER',
          user: {
            id: nextId.current, 
            username,
            email
          }
        })
        nextId.current += 1
        reset()
      }
    
    return (
        <div>
            <input name="username" placeholder="계정명" onChange={onChange} value={username} />
            <input name="email" placeholder="이메일" onChange={onChange} value={email} />
            <button onClick={onCreate}>등록</button>
        </div>
    )
}

export default CreateUser