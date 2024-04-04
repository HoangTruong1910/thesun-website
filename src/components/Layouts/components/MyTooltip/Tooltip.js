import React from 'react';
import Tippy from '@tippyjs/react/headless';
import styles from './Tooltip.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const Tooltip = ({ content, children }) => {
    return (
        <Tippy 
        interactive
        render={attrs => (
            // Gói Wrapper Search Result lại : 
            <div className={cx('custome-tooltip')} tabIndex='-1' {...attrs}>
                {content}
            </div>
        )}
        >
            {children}
        </Tippy>
    );
}

export default Tooltip;