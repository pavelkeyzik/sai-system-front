import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadInformationAboutNumber} from '../../actions/carNumber';
import SearchNumber from '../../containers/SearchNumber';
import CheckNumberLoader from '../../components/CheckNumberLoader';
import WriteNumber from '../../components/WriteNumber';

class DashboardPage extends Component {
  render() {
    return(
      <div>
        <SearchNumber />
        {this.props.carNumber.isRequestedBefore ? this.renderResult() : <WriteNumber />}
      </div>
    );
  }

  renderResult = () => {
    if(this.props.carNumber.isLoading) {
      return (<CheckNumberLoader />);
    }
    return (
      <ul>
        {this.props.carNumber.informationList.map(i => <li key={i.id}>{i.name}</li>)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    carNumber: state.carNumber
  };
} 

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadInformationAboutNumber: loadInformationAboutNumber
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);