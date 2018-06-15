import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class UsersList extends Component {
  render() {
    const { users, select } = this.props;
    return (
      <ul>
        {users.map(user => <li onClick={() => select(user)} key={user.id}>{user.name}</li>)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    userSelected: state.userSelected
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    select: select
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);