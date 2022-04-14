import React, { useState, useEffect } from 'react'
import Loading from '../componets/Loading';

const Users = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
            <Loading visible={isLoading} />
            {
                users.map(user => {
                    return(
                        <div>
                            <h3>ID: {user.id} - {user.name}</h3>
                                <p><b>Username: {user.username}</b></p>
                                <p><b>Email: {user.email}</b></p>
                            <hr></hr>
                        </div>
                        
                    )
                })
            }
        </>
    )
}

export default Users