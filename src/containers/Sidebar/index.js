import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <NavLink to="/dashboard" activeClassName="sidebar__link_active" className="sidebar__link">
          <i className="material-icons">account_balance_wallet</i>
        </NavLink>
        <NavLink to="/owner-info" activeClassName="sidebar__link_active" className="sidebar__link">
          <i className="material-icons">fingerprint</i>
        </NavLink>
        <NavLink to="/statistics" activeClassName="sidebar__link_active" className="sidebar__link">
          <i className="material-icons">timeline</i>
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;