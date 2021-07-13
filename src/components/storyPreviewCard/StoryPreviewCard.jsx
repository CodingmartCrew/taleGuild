import React, { useState } from 'react'
import { useHistory } from 'react-router';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import  ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import './storyCard.scss';

const StoryPreviewCard = ({ story }) => {
    const {likes,saves,views,titleImage,title,category,createdAt,description,categories,comments} = story;
    const {name, nickName, profileImage} = story.creator;
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    let history = useHistory();
    const Profile=()=>{
        return <div className="profileCard" onClick={()=>history.push()}>
           <div>
                <img src={profileImage} alt="i" />
            </div> 
            <div>
                <h5>{nickName}</h5>
                <p>{createdAt}</p>
            </div> 
        </div>
    }

    return (
        <div className="storyCard w-75 mx-auto my-3">
            <div className="head">
                <Profile />
            </div>
            <div className="body text-secondary">
                <img src={titleImage} alt="image" />
                <h5 className='m-1 text-dark'>{title} </h5> 
                {
                    category.map((data,ind)=><span className="m-1" key={ind}>{data}</span>)
                }
            </div>
            <div className="footer text-secondary m-2 d-flex justify-content-between">
                <div className="icon" onDoubleClick={()=>{setLiked(!liked)}}>
                    {
                       liked ? <FavoriteBorderRoundedIcon/> : <FavoriteOutlinedIcon className='text-danger' />
                    }
                    {likes} likes</div>
                <div className="icon"><ChatBubbleOutlineRoundedIcon className="icon-comment"/>{comments} comments</div>
                <div className="icon"><VisibilityOutlinedIcon />{views} views</div>
                <div className="icon"  onClick={()=>{setSaved(!saved)}}>
                    {
                        saved?<BookmarkIcon className="text-secondary" />:<BookmarkBorderOutlinedIcon className="icon-save"/>}
                    {saves} saves
                </div>
            </div>
        </div>
    )
}

export default StoryPreviewCard
