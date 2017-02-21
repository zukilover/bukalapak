import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { loadList, setCategoryUp } from '../actions/listActions';
import CategoryListItem from './CategoryListItem';
import config from 'config';

class CategoryList extends React.Component{
  componentDidMount(){
    this.props.loadList();
  }

  handleOnClick(e){
    e.preventDefault();
    this.props.dispatch(loadList(this.props.categoryLevel > 2 ? this.props.referrer: config.MAIN_CATEGORY));
    this.props.dispatch(setCategoryUp());
  }

  render() {
    const lists = this.props.lists;
    const allData = lists.map(list =>
      <CategoryListItem key={list.name} list={list} />
    );

    return (
      <div className="category-list-container">
        <div className="category-head clearfix">
          <p className="category-head-text pull-left">
            <strong>Pilih {this.props.categoryLevel > 1 ? (<span dangerouslySetInnerHTML={{__html: 'Subkategori ' + this.props.active.name}} />) : 'Kategori'}</strong>
          </p>
          {
            this.props.categoryLevel > 1 ?
              (
                <a onClick={this.handleOnClick.bind(this)} className="pull-right">
                  <span className="sr-only">Back to {this.props.referrer.name}</span>
                  <i className="icon icon-close"></i>
                </a>
              ) : null
          }
        </div>
        <ul className="category-list category-level-1">
          {allData}
        </ul>
      </div>
    );
  }
}

CategoryList.propTypes = {
  lists: PropTypes.array.isRequired,
  categoryLevel: PropTypes.number.isRequired,
  referrer: PropTypes.object.isRequired,
  active: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    lists: state.lists,
    categoryLevel: state.categoryLevel,
    referrer: state.referrer,
    active: state.active
  }
}

export default connect(mapStateToProps)(CategoryList);
