import logo from '../../svg/logotipo.svg';

const Header = () => {

    const desclogo= "Essa é a logo";

    return(
        <>
            <header  className='flex-space-between'>
                <div className="logo">
                    <img src={logo} alt={desclogo}/>
                </div>
                <div className="search">
                    <input type="text" className='input-search' name="search"/>
                </div>
                <ul className="menu">
                    <li>
                        <a href='#' className='nav-link'>Categories</a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>About</a>
                    </li>
                    <li>
                        <a href='#' className='nav-link'>Contact</a>
                    </li>
                </ul>
            </header>
        </>
    );
}
export default Header;