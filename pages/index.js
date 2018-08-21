// import Link from 'next/link';
import Head from 'components/head';
import Nav from 'components/Nav/Nav';
import '../common/styles/globalStyles.css';

const navItems = [
  {
    name: 'Home',
    url: '/index'
  },
  {
    name: '404',
    url: '/404'
  }
];

export default () => (
  <div>
    <Head title="Home" />
    <h1>Home</h1>
    <Nav navItems={navItems} />
  </div>
);
