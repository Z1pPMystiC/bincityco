import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
    
    const toggleMobileMenu = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.classList.toggle("active");
        console.log("Hamburger active");
        navMenu.classList.toggle("active");
        console.log("Navmenu active");
    }

    return (
        <div className='navbar-container'>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    <img src="/images/Transparent Logo Simple.png" alt="logo" className='logo-nav-img'/>
                </Link>
                <ul className='nav-menu'>
                    <div className='nav-items'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={toggleMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/faq' className='nav-links' onClick={toggleMobileMenu}>
                                FAQ
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={toggleMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={toggleMobileMenu}>
                                Contact
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
            <div class='hamburger' onClick={toggleMobileMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </div>
    )
}

export default Navbar