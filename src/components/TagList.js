import React from 'react';
import Tag from '../containers/Tag';

const TagList = ({ tags }) => (
  <ul>
    {
      tags.map(tag => (
        <Tag key={tag.id} {...tag} />
      ))
    }
  </ul>
);

export default TagList;
