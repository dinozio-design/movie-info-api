import React from 'react';

export default function Row(props) {
  return (
    <div className={`row${props.fluid ? '-fluid' : ''}`}>{props.children}</div>
  );
};