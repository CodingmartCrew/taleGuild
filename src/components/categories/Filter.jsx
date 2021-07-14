import React from 'react'
import "./Filter.scss";
const Filter = ({ content }) => { 
    return (
        <div>
            <div className="filter">
                <div className="filter-elements text-uppercase"> 
                    {
                        content.map((data,ind)=>{
                            return  (
                                <div className="label-hover" key={ind}>
                                {/* {data.logo && < img className="text-lowercase" src={data.logo} alt='icon' />} */}
                                <p className="elements" > {data.name}</p>
                            </div>)
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Filter
