import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadList } from '../actions/listActions';

class CategoryListItem extends React.Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e){
    e.preventDefault;
    this.props.dispatch(loadList(this.props.list.sub));
  }

  render() {
    const list = this.props.list;
    return(
      <li className="category-list-item">
        <a onClick={this.handleOnClick}>
          <i className={'icon icon-' + (list.sub ? 'expand' : 'collapse')}></i>
          <span>{list.name}</span>
          <small className="category-count">{list.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</small>
        </a>
      </li>
    )
  }
}


CategoryListItem.propTypes = {
  list: PropTypes.object.isRequired
};

export default connect()(CategoryListItem);
