import React from 'react'

const SearchBar = () => {
    return (
        <div className="form-group  d-flex">
            <span className="fa fa-search has-search form-control-feedback"></span>
            <input type="text" className="form-control px-5" placeholder="Search for stories" />
        </div>
    )
}

export default SearchBar
