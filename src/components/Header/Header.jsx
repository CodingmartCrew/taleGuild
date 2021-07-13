import React,{ useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/icons/taleGrid.svg';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import FreeBreakfastRoundedIcon from '@material-ui/icons/FreeBreakfastRounded';
import './Header.scss';
import SearchBar from '../common/searchBar/SearchBar';
import { TvRounded } from '@material-ui/icons';

const Header = () => {
    const [active,setActive]=useState('/');
    const [showSubMenu, setShowSubMenu] = useState(false)
    const isSignnedIn = true;
    const initial = 'R';
    const handleChange=(value)=>{
        setActive(value)
    }

    let history = useHistory();

    console.log(history);

    useEffect(() => {
        setActive(history.location.pathname)
    }, [history.location])

    return (
        <div className="header navbar fixed-top">
            <div className="content-left">
                <Link className='link' to="/">
                    <Logo className="icon"/>
                </Link>
                {
                    isSignnedIn && <>
                        <Link onClick={()=>handleChange(false)} className={`${active==='/feed' && 'active'} link`} to="/feed" >
                        <HomeOutlinedIcon  className="icon"  />Feed
                        </Link>
                        <Link onClick={()=>handleChange(TvRounded)} className={`${active==='/' && 'active'} link`} to="/">
                            <ExploreOutlinedIcon className="icon" />Explore
                        </Link>
                    </>
                }
            </div>
            <div className="content-middle">
                <SearchBar />
            </div>
            <div className="content-right">
               {
                   !isSignnedIn ?
                   <>
                        <div>
                            <Link className='link' to="/login">
                                <button className="btn secondary btn-border">Sign in</button>
                            </Link>
                        </div>
                        <div>
                            <Link className='link' to="/register">
                                <button className="btn primary btn-border">Sign up</button>
                            </Link>
                        </div>
                   </> :
                   <>
                        <div>
                            <a href='https://www.buymeacoffee.com/taleguildstory' target='_blank' className='link'>
                                <button className="btn secondary btn-border">
                                        <FreeBreakfastRoundedIcon className='icon' />
                                            Buy us a coffee
                                    </button>
                            </a>
                        </div>
                        <div>
                            <Link className='link' to="/story">
                                <button className="btn primary btn-border">New Story</button>
                            </Link>
                        </div>
                        <div>
                            <button className='profileLogo' >
                                {initial}
                                <div className='subMenuItems'>
                                    <p onClick={()=>{history.push('/show/user')}}>My Profile</p>
                                    <p>Drafts</p>
                                    <p>Saved Stories</p>
                                    <p>Account Setting</p>
                                    <p onClick={()=>{history.push('/login')}}>Logout</p>
                                </div>
                            </button>
                        </div>
                   </>
               }
            </div>
        </div>
    )
}

export default Header
