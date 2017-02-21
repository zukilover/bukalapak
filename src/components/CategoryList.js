import React, { PropTypes } from 'react';
import CategoryListItem from './CategoryListItem';

const CategoryList = () => {
  // const allData = lists.map(list =>
  //   <CategoryListItem large={3} key={list.name} list={list} />
  // );
  return (
    <div className="category-list-container">
      <p className="category-head"><strong>Pilih Kategori</strong></p>
      <ul className="category-list category-level-1">
        <CategoryListItem />
      </ul>
    </div>
  );
};

CategoryList.propTypes = {
  lists: PropTypes.array.isRequired
};

export default CategoryList;
