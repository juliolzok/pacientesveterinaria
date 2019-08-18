import React from 'react';
import PropTypes from 'prop-types';

const Header = ({titulo}) => (
                 <h1 className="text-center">{titulo}</h1>
        )

Header.propTypes = {
        titulo: PropTypes.string.isRequired
}
export default Header;