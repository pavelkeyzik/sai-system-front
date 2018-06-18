import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadInformationAboutNumber} from '../../actions/carNumber';
import SearchNumber from '../../containers/SearchNumber';
import ListOfPenalties from '../../containers/ListOfPenalties';
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
      <ListOfPenalties list={this.props.carNumber.informationList} />
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