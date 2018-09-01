import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem/NavItem';
import styles from './Nav.css';

function Nav({ navItems }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        {navItems.map(item => <li><NavItem {...item} /></li>)}
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navItems: PropTypes.array.isRequired
}

export default Nav;