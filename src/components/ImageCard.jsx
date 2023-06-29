import React from 'react'

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',');

    return (
        <div className='image-card'>
            <img src={image.webformatURL} alt='' />
            <div className='image-content'>
                <div className='image-content-username'>
                    Photo by {image.user}
                </div>
                <ul>
                    <li>
                        <strong>Views:</strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads:</strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes:</strong>
                        {image.likes}
                    </li>
                </ul>
                <div className='image-tags'>
                    {tags.map((tag, i) => (
                        <span key={i} className='image-tag-span'>
                            #{tag}
                        </span>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default ImageCard