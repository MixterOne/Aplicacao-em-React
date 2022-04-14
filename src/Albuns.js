import React, { useState, useEffect } from 'react'
import Header from './Header'
import Loading from './Loading';

const Albuns = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [albuns, setAlbuns] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => {
            setAlbuns(data)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
            <Header title="Álbuns" />
            <Loading visible={isLoading} />
            
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