import Logo from '../../assets/logo.png'
import './header.scss'

const Header = () => {
    return (
        <header>
            <a href='#'><img src={Logo}></img></a>
            <h2>Library Search</h2>
        </header>
    )
}


export default Header;