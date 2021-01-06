import classnames from 'classnames';
import _ from 'lodash';
import React, { useState } from 'react';

export const Container = ({ name, children }) => {
  const title = _.startCase(name);
  const id = _.kebabCase(name);

  const [isOpen, setOpen] = useState(true);
  const containerClasses = classnames('container', {
    'container--expandable': true,
    'container--expanded': isOpen,
  });
  return (
    <section className={containerClasses}>
      <a className="anchor" id={id}></a>
      <div className="container-header" onClick={() => setOpen(!isOpen)}>
        <h3>{title}</h3>
      </div>
      <div className="container-body">{children}</div>
    </section>
  );
};
