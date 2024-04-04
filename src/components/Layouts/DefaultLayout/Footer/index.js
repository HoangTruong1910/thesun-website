import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import styles from './Footer.module.scss';
import images from '~/assets/images';
import { faEnvelope, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles)
function Footer() {
    return ( 
        <footer className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className= {cx('campuses')}>
                    <img src={images.logo} alt='Ảnh 1'/>
                    <h3>Cơ sở 1</h3>
                </div>


                <div className= {cx('information')}>
                    <div classNames={cx('info-phone')}>
                        <FontAwesomeIcon className={cx('icon-phone','icon')} icon={faPhoneVolume}/>
                        <span>: 0123456789</span>
                    </div>

                    <div classNames={cx('info-gmail')}>
                        <FontAwesomeIcon className={cx('icon-gmail','icon')} icon={faEnvelope}/>
                        <span>: thesun@gmail.com</span>
                    </div> 

                    <div classNames={cx('info-facebook')}>
                        <FontAwesomeIcon className={cx('icon-facebook','icon')} icon={faFacebook}/>
                        <span>: thesun.facebook.com</span>
                    </div>

                </div>
            </div>
        </footer>
    );
}


<footer
className="bg-neutral-200 text-center text-white dark:bg-neutral-600 dark:text-neutral-200">

</footer>


export default Footer;