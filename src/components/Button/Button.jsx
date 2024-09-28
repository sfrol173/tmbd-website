import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import './Button.scss';

const Button = (props) => {
    const  {onClick, type='button', className, href, children, to, isOutline,isDel, ...restProps} = props;

    let Element = href ? 'a' : 'button';

    if (to) {
    Element = Link;
    }

    return (
        <Element
            type={!href && type}
            onClick={onClick}
            className={cn('button', className, {'outline':isOutline, 'del':isDel})}
            to={to}
            href={href}
            {...restProps}
        >
            {children}
        </Element>
  )

}

Button.propTypes = {
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.any,
    to: PropTypes.string,
    isOutline: PropTypes.bool,
    isDel: PropTypes.bool,
    restProps: PropTypes.object
}

export default Button