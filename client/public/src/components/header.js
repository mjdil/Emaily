import React, {Component} from 'react';
import {connect} from 'react-reux';
import {link} form 'react-router_dom';
import Payments from './Payments';
class Header extends Component{

  renderContent(){
    switch (this.props.auth ) {
      case null:
      return

      case false:
      return <li><a href= "/auth/google">Login With Google</a></li>

      default:
      return [
        <li key = "1">Payments</li>,
        <li key = "4">Credits: {this.props.auth.credits}</li>,
      <li key = "2"><a href ="/api/logout">Logout</a></li>;
    ];
        
    }
  }

  render(){
    return (
      <nav>
        <div className = "nav-wrapper">
          <Link
          to = {this.props.user ? '/surveys' : '/'}
          className="left brand-logo"
          >
          Emaily
          </Link
          <ul className = "right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}){
  return {auth};
}
export default connect(mapStateToProps)(Header);
