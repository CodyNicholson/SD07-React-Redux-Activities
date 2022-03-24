import { useEffect, useState } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import Spinner from './Spinner'

const ArtistView = () => {
    const { id } = useParams()
    const history = useHistory()
    const [ artistData, setArtistData ] = useState([])
    
    useEffect(() => {
        const API_URL = `http://localhost:4000/album/${id}`
        const fetchData = async () => {
            const response = await fetch(API_URL)
            const resData = await response.json()
            setArtistData(resData.results)
        }
        fetchData()
    }, [id])

    const allAlbums = artistData.filter(entity => entity.collectionType === 'Album')
    .map((album, i) => {
        return (
            <div key={i}>
                <Link to={`/album/${album.collectionId}`}>
                    <p>{album.collectionName}</p>
                </Link>
            </div>)
        })

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => {history.push('/')}}>Home</button> |
                <button onClick={() => {history.goBack()}}>Back</button>
            </div>
        )
    }

    return (
        <div>
            {artistData.length > 0 ? <h2>{artistData[0].artistName}</h2> : <Spinner />}
            {navButtons()}
            {allAlbums}
        </div>
    )
}

export default ArtistView