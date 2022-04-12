import React, { useState, useEffect } from 'react'


const Albuns = () => {
    const [loading, setLoading] = useState(false)
    const [albuns, setAlbuns] = useState([]);

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            setAlbuns(data)
            setLoading(false)
        })
    }, [])

    return(
        <>
            <h1>Álbuns</h1>
            {
                loading === true ? <h1>Carregando..</h1> : ''
            }
            
            {
                albuns.map(album => {
                    return(
                        <div>
                            <p>ID: {album.id}</p>
                            <h4>{ album.title } </h4>
                            
                            <hr></hr>
                        </div>

                    )

                })
            }
        </>
    )
}

export default Albuns