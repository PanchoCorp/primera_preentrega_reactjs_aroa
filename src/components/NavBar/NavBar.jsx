import CartWidget from '../CartWidget/CartWidget'
import'./NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>TECNO MF</h1>

            <nav>
                <ul>
                    <li>PC ARMADAS</li>
                    <li>CELULARES</li>
                    <li>ACCESORIOS</li>
                    <li>MAS INFO</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar