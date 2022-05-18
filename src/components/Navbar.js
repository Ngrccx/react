import CartWidget from './CartWidget';

const Navbar = () => {
    return (
        <nav className="nav">
            Hola soy Mishka
            <ul className="nav__items">
                <li className="nav__items--item">Inicio</li>
                <li className="nav__items--item">Sobre Nosotros</li>
                <li className="nav__items--item">Tienda</li>
            </ul>
            <CartWidget />
        </nav>
    );
}

export default Navbar;