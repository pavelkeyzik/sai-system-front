import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {loadInformationAboutNumber} from '../../actions/carNumber';
import './index.scss';

class SearchNumber extends Component {

  render() {
    return(
      <div className="search-number">
        <input onKeyDown={this.findNumber} onChange={this.handleInputChange} placeholder="1111 AA-1" maxLength="9" ref="numberOfCar" className="search-number__input" type="text"/>
      </div>
    );
  }

  handleInputChange = (event) => {
    let ref = this.refs.numberOfCar;

    if(!this.checkNumber(ref.value)) {
      this.refs.numberOfCar.classList.remove('search-number__input_valid');
      this.refs.numberOfCar.classList.add('search-number__input_invalid');
    } else {
      this.refs.numberOfCar.classList.remove('search-number__input_invalid');
      this.refs.numberOfCar.classList.add('search-number__input_valid');
    }
  }

  checkNumber(value) {
    return /^[0-9]{4} [ABEIKMHOPCTX]{2}-[1-7]$/.test(value);
  }

  findNumber = (event) => {
    if(event.key === 'Enter' && this.checkNumber(this.refs.numberOfCar.value)) {
      this.props.loadInformationAboutNumber(this.refs.numberOfCar);
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchNumber);