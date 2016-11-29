import React from 'react';
import { Link } from 'react-router';

const Header = (props) => {
  return (
    <header className="m-header">
      <div role="banner" className="m-banner">
        <Link to="/">
          HOME
        </Link>
      </div>
      <nav role="navigation" className="m-nav">
        <ul className="m-nav__list">
          <li className="m-nav__list-item">
            <Link className="m-nav__list-link" to="/">Page 1</Link>
          </li>
          <li className="m-nav__list-item">
            <Link className="m-nav__list-link" to="/two">Page 2</Link>
          </li>
          <li className="m-nav__list-item">
            <Link className="m-nav__list-link" to="/three">Page 3</Link>
          </li>
          <li className="m-nav__list-item">
            <Link className="m-nav__list-link" to="/four">Page 4</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
};

export default Header;
