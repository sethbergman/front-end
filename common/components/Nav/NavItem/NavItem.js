import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles from './NavItem.css';

function NavItem({ name, url }) {
  return (
    <li className={styles.item} key={url}>
        <Link prefetch href={url}>{name}</Link>
    </li>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default NavItem;
