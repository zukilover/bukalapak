import React from 'react';
import config from 'config';

const Header = () => {
  return (
    <header className="site-head">
      <h1 className="logo">
        <a href={config.BASE_URL}>
          <img src="images/logo.png" alt="Bukalapak" />
        </a>
      </h1>
      <button className="btn btn-seamless btn-refresh">
        <span className="sr-only">Refresh</span>
        <i className="icon icon-refresh"></i>
      </button>
    </header>
  );
};

export default Header;
