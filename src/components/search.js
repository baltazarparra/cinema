import React from 'react';
import PropTypes from 'prop-types';

const Search = ({getValue}) => (
    <div className='search'>
        <label>
          <span>Digite o nome do filme</span>
          <input
            type='search'
            placeholder='Ex. Doutor Estranho'
            onClick={getValue}
          />
        </label>
    </div>
)

Search.propTypes = {
    getValue: PropTypes.func.isRequired
}

export default Search