import React from 'react';
// here we set a columns size instead of its className in the prop so that we can use the bootstrap column properties
export default function Column(props) {
  const size = props.size
    .split(' ')
    .map((size) => `col-${size}`)
    .join(' ');

  return <div className={size}>{props.children}</div>;
};

