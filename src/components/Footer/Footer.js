import styles from "./Footer.module.scss";
import { ReactComponent as InstaIcon } from '../../images/instagram.svg';
import { ReactComponent as TwetIcon } from '../../images/twitter.svg';
import { ReactComponent as FaceIcon } from '../../images/facebook.svg';
import {ReactComponent as PintIcon} from '../../images/pinterest.svg';
const Footer = () => {
    return (
        <footer className={styles.footer}>

            <ul className={styles.social__list}>
                <li> <a href=""><PintIcon /></a></li>
                <li> <a href=""><FaceIcon /></a></li>
                <li> <a href=""><TwetIcon /></a></li>
                <li> <a href=""><InstaIcon /></a></li>
            </ul>

        </footer> 
     );
}

export default Footer