import React, { useEffect, useState } from 'react'
import Filter from '../../components/categories/Filter'
import Title from '../../components/common/titles/Title';
import StoryPreviewCard from '../../components/storyPreviewCard/StoryPreviewCard';
import StorySmallCard from '../../components/common/storysmallCard/StorySmallCard'; 
import {categories, filterTitle, languages, midSectionTitle, mystories, rightSectionTitle } from '../../services/data';
import "./Home.scss";
import axios from 'axios';
import { backend_url } from '../../services/urls';
const Home = () => {
    const [leftActive, setLeftActive] = useState(filterTitle[0])
    const [middleActive, setMiddleActive] = useState(midSectionTitle[0])
    const [rightActive, setRightActive] = useState(rightSectionTitle[0])
    const [storyFeed, setStoryFeed] = useState(null);
    const [storyFeedAll, setStoryFeedAll] = useState(null);
    const [currentFilter, setCurrentFilter] = useState('ALL');

        useEffect(() => {
            setStoryFeed('Loading');
            async function fetchData(){
                await axios.get(`${backend_url}/api/getallpost`).then((res)=>{
                    setStoryFeedAll(res.data)
                    setStoryFeed(res.data) 
                })
            }
            fetchData();
        },[])

        useEffect(() => {
            setCurrentFilter('ALL');
        }, [leftActive])

        useEffect(() => {
            (currentFilter === 'ALL') ? setStoryFeed(storyFeedAll):
            setStoryFeed(storyFeedAll.filter((post)=> (leftActive === 'Languages') ? post.postlanguage  === currentFilter : post.postcategory === currentFilter))
        }, [currentFilter,storyFeedAll])
        
    return (
        <div className="main">
            <div className='d-flex'>
                <div className="left m-2 positon-relative">
                    <div className="d-flex ">
                        {
                            filterTitle.map((data)=><Title active={leftActive} setActive={setLeftActive} label={data}  />)
                        }
                    </div>
                    <div className="overflowscroll">
                        <Filter setCurrentFilter={setCurrentFilter} content={ leftActive === filterTitle[0] ? categories : languages } />
                    </div>
                </div>
                <div className="middle m-2">
                    <div className="d-flex ">
                        {
                            midSectionTitle.map((data)=><Title active={middleActive} setActive={setMiddleActive} label={data}  />)
                        }
                    </div>
                    <div>
                        {
                           (storyFeed==='Loading') ? 'Loading...': !storyFeed?.length ? 'No stories found':storyFeed?.map((story)=> <StoryPreviewCard story={story} /> )
                        }
                    </div>
                </div>
                <div className="right m-2">
                    <div className="d-flex ">
                        {
                            rightSectionTitle.map((data)=><Title active={rightActive} setActive={setRightActive} label={data}  />)
                        }
                    </div> 
                    <div>
                        {
                            mystories.map((data)=><StorySmallCard image={data.logo} title={data.title} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
