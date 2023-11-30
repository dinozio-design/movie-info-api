import React from 'react';

const styles={
    containerStyle:{
        marginTop: "2em", 
        marginBottom: "2em"
    }
};

export default function Container(props) {
  return (
    <div style={styles.containerStyle} className={`container${props.fluid ? '-fluid' : ''}`}>
      {props.children}
    </div>
  );
};