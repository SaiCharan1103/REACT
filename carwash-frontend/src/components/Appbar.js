import React,{useState} from "react";
import {Link} from 'react-router-dom'
function Appbar(){
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closedMobileMenu = () => setClick(false);

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="navbar-logo">
                    SAI <i className="fab fa-typo3"   />            
                 </Link>
                 <div className="menu-icon">
                     <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                 </div>
                 <ul className={click? 'nav-menu active' : 'nav-menu'}>
                     <li className="nav-item">
                         <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                             Home
                         </Link>
                     </li>
                 </ul>

            </div>
        </nav>

        </>
    )
}
export default Appbar