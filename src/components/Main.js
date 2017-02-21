require('normalize.css/normalize.css');
require('styles/style.css');

import React, {PropTypes} from 'react';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div className="contain-global">
        <Header />
        <div className="contain-main">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
