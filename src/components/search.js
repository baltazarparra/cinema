import React from 'react';

const Search = () => (
    <div className='search'>
        <label>
          Digite o nome do filme
          <input
            type='search'
            placeholder='Ex. Entre meninos e lobos'
          />
        </label>
    </div>
)

export default Search