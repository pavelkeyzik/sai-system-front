import React, {Component} from 'react';
import './index.scss';

class ListOfPenalties extends Component {
  render() {
    const { list } = this.props;

    return (
      <div className="list-of-penalties">
        <div className="list-of-penalties__table">
          <h2>Нарушения (2):</h2>
          <div className="list-of-penalties__table-header">
            <div>#</div>
            <div>Вид нарушения</div>
            <div>Дата</div>
            <div>Оплачено</div>
          </div>
          {list.map(i => 
            <div className="list-of-penalties__table-item" key={i.id}>
              <div>{i.id}</div>
              <div>{i.name}</div>
              <div>{i.date}</div>
              <div>
                {i.paid ?
                  <i className="material-icons">check_circle_outline</i> :
                  <i className="material-icons">highlight_off</i>}
              </div>
            </div>)
          }
        </div>
      </div>
    );
  }
}

export default ListOfPenalties;