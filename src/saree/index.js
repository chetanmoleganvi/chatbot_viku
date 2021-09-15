import React from 'react';
import ReactDOM from 'react-dom';
import NavBarTop from './saree/navbarroutes';
import './css/bootstrap.min.css';
import './css/Dropdown.css';
import './css/carousel.css';

class Index extends React.Component {
    render() {
      return (
          <div>
            <NavBarTop />
          </div>
      );
    }
  }
  ReactDOM.render(<Index />, document.getElementById('root'));
