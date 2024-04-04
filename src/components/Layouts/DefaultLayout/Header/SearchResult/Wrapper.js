import classNames from "classnames/bind";
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles)
function Wrapper({children}) {
    return ( 
        <div className={cx('Wrapper-Search-Result')}>
            {children}
        </div>
    );
}

export default Wrapper;