import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './Nav.css';

function Nav({ navItems }) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.links}>
        { navItems.map(item => 
          <li key={item.url}>
            <Link prefetch href={item.url}>
              {item.name}
            </Link></li>
          ) 
        }
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navItems: PropTypes.array.isRequired
}

export default Nav;
