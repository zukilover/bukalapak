import React from 'react';

const Header = () => {
  return (
    <header className="site-head">
      <h1 className="logo">
        <img src="images/logo.png" alt="Bukalapak" />
      </h1>
      <button className="btn btn-seamless btn-refresh">
        <span className="sr-only">Refresh</span>
        <i className="icon icon-refresh"></i>
      </button>
    </header>
  );
};

export default Header;
