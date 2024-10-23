import Icon from '../../assets/icon.svg'
import './style.css';
const Header = () => {
    return(
        <div className='header'>
            <img src={Icon} alt="weather icon" />
            <p>Clima</p>
        </div>
    );
}

export default Header;