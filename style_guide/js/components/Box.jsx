import _ from 'lodash';
import React from 'react';

export const Box = ({
  className,
  height = 'auto',
  width = 'auto',
  margin = '10px',
  active = false,
}) => {
  const label = width == height ? width : `${width}⨯${height}`;
  const style = {
    margin,
    height,
    width,
  };
  const activeClass = !!active ? 'box--active' : null;
  const boxClasses = _.compact(['box', className, activeClass]).join(' ');
  return (
    <div className={boxClasses} style={style}>
      {label}
    </div>
  );
};
