import classnames from 'classnames';
import _ from 'lodash';
import React from 'react';

export const Section = ({ name, className, children, style }) => {
  const divClasses = classnames(className);
  return (
    <div className={'container-block'}>
      <code>{name || `.${className}`}</code>
      <div className={divClasses} style={style}>
        {children}
      </div>
    </div>
  );
};
