import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ArtistView() {
    const { id } = useParams();
    const [ artistData, setArtistData ] = useState([]);

    return (
        <div>
            <p>The id passed was: {id}</p>
            <p>Artist data goes here!</p>
        </div>
    )
}

export default ArtistView;
