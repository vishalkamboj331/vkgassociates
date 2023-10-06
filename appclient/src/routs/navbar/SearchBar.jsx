import React from 'react'
import { SiIconfinder } from 'react-icons/si';
import './SearchBar.css'

const SearchBar = () => {
  return (
    <div style={{width : '100%' }} >
        <input type="text" id="input" autocomplete="off" value="" placeholder="How May we hepl you folks!..." className="SearchBar"/>
        <button className='SearchButton' ><SiIconfinder /> Ask</button>
    </div>
  )
}

export default SearchBar