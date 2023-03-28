import React from 'react';
import Posting from './Posting'

const craigsPost = require('../postings')
console.log(craigsPost);

function Gallery(){
    return (
        <div className='gallery'>
            <h1>Gallery</h1>
            {craigsPost.postings.map((posting, i) => {
                return <Posting posting={posting} key={i} />
            })}
        </div>
    )
}

export default Gallery;