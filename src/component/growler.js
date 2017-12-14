import React from 'react';
import classNames from 'classnames/bind';
import errors from 'classnames/bind';
import './growler.scss';

const GrowlerComponent = ({growler, hideGrowler, message}) => {

  const growlerClass = classNames('growler', growler.type, {
    'growler--hiding': growler.status === 'hide' ? true : false,
    'growler--hidden': growler.status === 'hidden' ? true : false,
  });

  return (
    <div className={growlerClass}
      // onClick={ (evt) => { evt.preventDefault(); hideGrowler(growler);} }
      >
      <span className={`icon ${growler.icon}`}></span>
      <p className="container">
        { message }
      </p>
    </div>
  );
};
export default GrowlerComponent;
