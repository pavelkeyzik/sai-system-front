import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserInfo extends Component {
  render() {
    if(!this.props.userSelected) return (<p>Not Selected</p>);
    const { name, height } = this.props.userSelected;

    return (
      <p>Рост <b>{name}</b> составляет <b>{ height }</b></p>
    );
  }
}

function matchStateToProps(state) {
  return {
    userSelected: state.userSelected
  };
}

export default connect(matchStateToProps)(UserInfo);