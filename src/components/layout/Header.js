import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  const links = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Team space',
      link: '/two'
    },
    {
      name: 'Tools',
      link: '/three'
    },
    {
      name: 'Learning centre',
      link: '/four'
    }
  ];
  return (
    <header className="m-header">
      <div role="banner" className="m-banner">
        <Link to="/">
          HOME
        </Link>
      </div>
      <nav role="navigation" className="m-nav">
        <ul className="m-nav__list">
          { links.map((link, index) => {
            return (
              <li className="m-nav__list-item">
                <Link className="m-nav__list-link" activeClassName="m-nav__list-link--active" to={link.link}>{ link.name }</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
};

export default Header;
