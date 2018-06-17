import React from 'react';
import UsersList from '../containers/UsersList';
import UserInfo from '../containers/UserInfo';

export default () => (
  <div>
    <h2>List of users:</h2>
    <div style={{display: 'flex'}}>
      <UsersList />
      <UserInfo />
    </div>
  </div>
);