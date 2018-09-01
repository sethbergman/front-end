import React from 'react';
import PropTypes from 'prop-types';
import NavDropdown from '../NavDropdown/NavDropdown';
import styles from './NavItem.css';

function NavItem({ name, links }) {
  return (
    <>
    <span className={styles.item}>{name}</span>
    <NavDropdown links={links}/>
    </>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default NavItem;
