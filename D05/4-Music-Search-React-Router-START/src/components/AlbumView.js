import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AlbumView() {
    const { id } = useParams();
    const [ albumData, setAlbumData ] = useState([]);

    return (
        <div>
            <p>The id passed was: {id}</p>
            <p>Album data goes here!</p>
        </div>
    )
}

export default AlbumView;
