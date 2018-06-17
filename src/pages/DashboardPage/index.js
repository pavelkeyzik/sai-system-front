import React, {Component} from 'react';
import UsersList from '../../containers/UsersList';
import UserInfo from '../../containers/UserInfo';

class DashboardPage extends Component {
  render() {
    return(
      <div>
        <h1>Dashboard Page</h1>
        <UsersList />
        <UserInfo />
      </div>
    );
  }
} 

export default DashboardPage;