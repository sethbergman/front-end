import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from './NavDropdown.css';

function NavDropdown({ links }) {
    const listItems = links.map(link => 
        <li className={styles.item} key ={link.url}>
            <Link prefetch href={link.url}>{link.name}</Link>
        </li>
    );

    return (
        <ul className={styles.dropdown}>
            {listItems}
        </ul>    
    );
}

NavDropdown.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    })).isRequired
  }

export default NavDropdown;