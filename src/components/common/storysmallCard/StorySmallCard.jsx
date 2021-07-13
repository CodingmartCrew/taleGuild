import React from 'react'
import './smallStory.scss';

const StorySmallCard = ({image,title}) => {
    return (
        <div className='smallTitleCard'>
            <img src={image} alt={title} />
            <h6>{title}</h6>
        </div>
    )
}

export default StorySmallCard
