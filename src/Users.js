import React, { useState, useEffect } from 'react'

const Users = () => {
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data)
            setLoading(false)
        })
    }, [])

    return(
        <>
            <h1>Users</h1>
            {
                loading === true ? <h1>Carregando..</h1> : ''
            }
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