import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserInfo extends Component {
  render() {
    if(!this.props.userSelected) return (<p>Not Selected</p>);
    const { login, id, avatar_url } = this.props.userSelected;

    return (
      <div>
        <p>ID: <b>{id}</b></p>
        <p>Логин: <b>{login}</b></p>
        <img width="300" src={avatar_url} alt={`${login} avatar`} />
      </div>
    );
  }
}

function matchStateToProps(state) {
  return {
    userSelected: state.userSelected
  };
}

export default connect(matchStateToProps)(UserInfo);