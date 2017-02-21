import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadList, setReferrer, setCategoryDown } from '../actions/listActions';

class CategoryListItem extends React.Component {
  constructor(props){
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e){
    e.preventDefault;
    this.props.dispatch(setReferrer({
      path: this.props.active.path,
      name: this.props.active.name
    }));
    this.props.dispatch(loadList({
      path: this.props.list.sub,
      name: this.props.list.name
    }));
    this.props.dispatch(setCategoryDown());
  }

  render() {
    const list = this.props.list;
    return(
      <li className="category-list-item">
        <a onClick={this.handleOnClick}>
          <i className={'icon icon-' + (list.sub ? 'expand' : 'collapse')}></i>
          <span dangerouslySetInnerHTML={{__html: list.name}} />
          <small className="category-count">{list.count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</small>
        </a>
      </li>
    )
  }
}


CategoryListItem.propTypes = {
  list: PropTypes.object.isRequired,
  active: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return {
    active: state.active
  }
}

export default connect(mapStateToProps)(CategoryListItem);
