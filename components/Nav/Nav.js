import Link from 'next/link';
import PropTypes from 'prop-types';

function Nav({ navItems }) {
  return (
    <nav>
      <ul>
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
