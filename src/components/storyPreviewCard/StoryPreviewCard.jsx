import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import  ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import './storyCard.scss';

const StoryPreviewCard = ({ story }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(2);
    const [saved, setSaved] = useState(false);
    const [saves, setSaves] = useState(4);
    const [views, setviews] = useState(4);
    const [comments, setComments] = useState(4);
    const [user, setUser] = useState(null);
    let history = useHistory();

    useEffect(() => {
        console.log(story);
        setUser(JSON.parse(localStorage.getItem('tale_user_details')))
    }, [])

    const Profile=()=>{
        return <div className="profileCard" onClick={()=>history.push(`/story/${story.id}`)}>
           <div>
                <img className='bdr-50' src={story?.postimageurl} alt="i" />
            </div> 
            <div>
                <h5>{user?.username}</h5>
                <p>{story?.email}</p>
            </div> 
        </div>
    }

    return (
        <div className="storyCard w-75 mx-auto my-3">
            <div className="head">
                <Profile />
            </div>
            <div className="body text-secondary">
                <img src={story?.postimageurl} alt="image" />
                <h5 className='m-1 text-dark'>{story?.posttitle} </h5> 
                {/* {
                    category.map((data,ind)=><span className="m-1" key={ind}>{data}</span>)
                } */}
                <span className="m-1 h6" >{story?.postcategory}</span>
            </div>
            <div className="footer text-secondary m-2 d-flex justify-content-between">
                <div className="icon" onDoubleClick={()=>{
                    setLiked(!liked)
                    setLikes(liked?likes+1:likes-1)
                    }}>
                    {
                       liked ? <FavoriteBorderRoundedIcon/> : <FavoriteOutlinedIcon className='text-danger' />
                    }
                    {likes} likes</div>
                <div className="icon"><ChatBubbleOutlineRoundedIcon className="icon-comment"/>{comments} comments</div>
                <div className="icon"><VisibilityOutlinedIcon />{views} views</div>
                <div className="icon"  onClick={()=>{
                    setSaved(!saved)

                    setSaves(!saved?saves+1:saves-1)
                    }}>
                    {
                        saved?<BookmarkIcon className="text-secondary" />:<BookmarkBorderOutlinedIcon className="icon-save"/>}
                    {saves} saves
                </div>
            </div>
        </div>
    )
}

export default StoryPreviewCard
