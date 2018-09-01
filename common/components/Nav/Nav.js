import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem/NavItem';
import styles from './Nav.css';

function Nav({ navItems }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {navItems.map(item => <NavItem {...item} />)}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navItems: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
}

export default Nav;
