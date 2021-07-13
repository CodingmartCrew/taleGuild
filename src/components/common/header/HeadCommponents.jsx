import React from 'react'
import FreeBreakfastRoundedIcon from '@material-ui/icons/FreeBreakfastRounded';
import { Link } from 'react-router-dom';

const LoggedIn = ({initial}) => {
    return (
        <div className="content-right">
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
                <div className='profileLogo'>
                    {initial}
                    </div>
            </div>
        </div>
    )
}

export {
    LoggedIn
}
