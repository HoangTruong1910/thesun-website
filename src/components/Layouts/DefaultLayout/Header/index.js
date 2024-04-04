import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';


//Local Source Code : 
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as WrapperSearchResult } from './SearchResult';
import { MyTooltip } from '../../components/MyTooltip';


const cx = classNames.bind(styles)
function Header() {


    return ( 
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                <MyTooltip
                    content='Trang Chủ'
                >
                    <div className={cx('logo')}>
                        <img src = {images.logo} alt='TheSunLogo'/>
                        <h3>
                            <div>
                                <span>The Sun</span>
                                <span className={cx('type-title')}>Education</span>
                            </div>
                        </h3>

                    </div>
                </MyTooltip>
               

                {/* Search */}
                <Tippy 
                interactive
                // visible={searchResult.length > 0}
                render={attrs => (
                    // Gói Wrapper Search Result lại : 
                    <WrapperSearchResult>
                        <div className={cx('search-result')} tabIndex='-1' {...attrs}>
                            kết quả 
                        </div>
                    </WrapperSearchResult>
                )}
                >
                    <div className={cx('search')}>
                        <input className={cx('search-input')}
                                placeholder='Search ....'
                                spellCheck= {false}
                        />
                        <button className={cx('clear-btn')}>
                            {/* Icon Clear */}
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                        {/* Icon Loading */}
                        <FontAwesomeIcon className={cx('loading-spinner')} icon= {faSpinner} />

                        {/* Add Tippy into Button Search */}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </button>
                            
                    
                    </div>
                </Tippy>
                
                {/* Action */}
                <div className={cx('action')}>
                    <MyTooltip
                       content= 'Đăng Nhập'
                    >
                        <button className={cx('login-btn')}>
                            <img src={images.login} alt='Login'/>
                        </button>
                    </MyTooltip>
                   

                    <MyTooltip
                        content='Menu'
                    >
                        <button className={cx('menu-btn')}>
                            <img src={images.menu} alt='Menu'/>
                        </button>
                    </MyTooltip>
                    
                </div>
             
                
            </div>
        </header>
    );
}

export default Header;