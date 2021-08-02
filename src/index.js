import React from 'react';
import ReactDOM from 'react-dom';
// import Navbar from './navbar';
// import NavBarTop from './navbar/navbarroute';
// import NavBar from './navbar1';
// import Product from './product';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbarb from './bootstrapnav';
//import UserSearch from './search';
import App from './app';
import Home from './saree/home';
import Slide from './saree/slide';





class LearnReact extends React.Component {
  render() {
    return (
      <appMain>
        <Home />
        <Slide />
        <App />
            {/* <UserSearch /> */}
        {/* <Navbarb /> */}
        {/* <NavBar />
        <Product /> */}
          {/* <Navbar /> */}
          {/* <NavBarTop /> */}
      </appMain>
    );
  }
}
ReactDOM.render(<LearnReact />, document.getElementById('root'));

