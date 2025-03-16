import React from 'react'
import Search from '../icons/Search'

const SearchBarComp = () => {
  return (
    <div className='mainSearBar'>
        {/* Destination */}
        <div className='destination'>
          <select>
            <option>NY</option>
            <option>NY</option>
            <option>NY</option>
            <option>NY</option>
          </select>
        </div>

        {/* Checkin */}
        <div className='checkin'>
          <input type='date'/>
        </div>

        {/* Checkout */}
        <div className='checkout'>
          <input type='date'/>
        </div>

        {/* How many */}
        <div className='guest'>
          <input type='date'/>
        </div>

        {/* Search Icon */}
        <div>
          <Search width="30" color="orange"/>
          <button>Search</button>
        </div>
    </div>
  )
}

export default SearchBarComp