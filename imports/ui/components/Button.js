import * as React from 'react';

const Button = ({children, bsStyle='default'}) => (
    <button className={`btn btn-${bsStyle}`}>{children}</button>
);

export default Button;
