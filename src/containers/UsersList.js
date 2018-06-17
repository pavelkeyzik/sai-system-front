import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select, getUsers} from '../actions/index';

class UsersList extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    if(this.props.users.isLoading) return (<h1>Loading data..</h1>);

    return (
      <ul>
        {this.props.users.list.map(user => <li onClick={() => this.props.select(user)} key={user.id}>{user.login}</li>)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    userSelected: state.userSelected,
    isLoading: state.isLoading
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    select: select,
    getUsers: getUsers
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(UsersList);