import React from 'react';
import PropTypes from 'prop-types';

const Search = ({getValue}) => (
    <div className='search'>
        <label>
          Digite o nome do filme
          <input
            type='search'
            placeholder='Ex. Sobre meninos e lobos'
            onClick={getValue}
          />
        </label>
    </div>
)

Search.propTypes = {
    getValue: PropTypes.func.isRequired
}

export default Search