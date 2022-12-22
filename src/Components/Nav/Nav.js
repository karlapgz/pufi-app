import '../../css/Nav.css'
 
const Nav = () => {
    return (
        <header>
            <nav>
                <p className='logo'>Pufi</p>
                <ul className='menu'>
                    <li>
                        <i class="far fa-window-restore"></i>
                        Pufi Puff
                    </li>
                    <li>
                        <i class="fas fa-umbrella"></i>
                        Pufi rain
                    </li>
                    <li>
                        <i class="fas fa-shopping-cart"></i>
                        Pufi cart
                    </li>
                    <li>
                        <i class="fas fa-box"></i>
                        Pufi nap
                    </li>
                </ul>

                <div className="cuenta-compra">
                    <p>Mi cuenta</p>
                    <p>Mi compra</p>
                </div>
            </nav>

            <h1>Estár cómodo, nunca fue tan fácil.</h1>

            <button className='btn-shop'>Shop</button>

            <div className="btns_main">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </header>
    )
}

export default Nav 