import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import StoryPreviewCard from '../../components/storyPreviewCard/StoryPreviewCard';
import { backend_url } from '../../services/urls';
import '../Feed/feed.scss';

const ShowFeed = () => {

    let {id} = useParams();
    const [storyFeed, setStoryFeed] = useState(null);

    useEffect(() => {
        async function fetchData(){
            setStoryFeed('Loading')
            try{
                await axios.get(`${backend_url}/api/getpostbyid/${id}`).then((res)=>{
                    console.log(res.data);
                    setStoryFeed(res.data)
                })
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    },[id])
    return (
        <div>
            <div className="w-50 text-wrap text-center mx-auto">
                <StoryPreviewCard story={storyFeed} />
                <p className='h5'>{storyFeed?.postcontent}</p>
            </div>
        </div>
    )
}

export default ShowFeed
