import React, { useState,useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { midSectionTitle, sampleUser,sampleStories } from '../../services/data';
import Title from '../../components/common/titles/Title';
import StoryPreviewCard from '../../components/storyPreviewCard/StoryPreviewCard';
import './profile.scss';

const Profile = () => {
    let {user} = useParams();
    
    const [data, setData] = useState(sampleUser);
    const [middleActive, setMiddleActive] = useState(midSectionTitle[0])
    const [stories, setStories] = useState(sampleStories);

    useEffect(() => {
        setData(sampleUser)
    })

    console.log(user);
    return (
        <div className='m-16 profile mx-auto'>
                <div className='head'>
                    <div className='px-5'>
                        <img src={data.image} alt="profile" />
                    </div>
                    <div className='w-100 text-center'>
                        <h4>{data.name}</h4>
                        <div className="d-flex  justify-content-evenly w-100">
                            <p>{data.stories}<br />stories</p>
                            <p>{data.followers}<br />followers</p>
                            <p>{data.followings}<br />followings</p>
                        </div>
                    </div>
                </div>
                
                <div className="middle my-2 px-4">
                    <div className="d-flex">
                        {
                            midSectionTitle.map((data)=><Title active={middleActive} setActive={setMiddleActive} label={data}  />)
                        }
                    </div>
                    <div>
                        {
                            stories.map((story)=> <StoryPreviewCard story={story} /> )
                        }
                    </div>
                </div>
        </div>
    )
}

export default Profile
