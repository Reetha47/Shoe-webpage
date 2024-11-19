import React from 'react'

const SearchBar = ({ searchTerm, setsearchTermm }) => {
    return (
        <div >
            <form>
                <input className='ml-5 bg-stone-500 text-white border-none outline-none w-[400px] rounded-md px-2 py-2' type='text' name='search' placeholder='Search here'
                 onChange={(e) => setsearchTermm(e.target.value)} />
            </form>
        </div>
    )
}

export default SearchBar