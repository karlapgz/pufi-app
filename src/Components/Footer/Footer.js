import '../../css/Footer.css'

const Footer = () => { 
    return (
        <footer>
             <p className='logo'>Pufi</p>
                <ul className='menu_footer'>
                    <li>Pufi Puff</li>
                    <li>Pufi rain</li>
                    <li>Pufi cart</li>
                    <li>Pufi nap</li>
                </ul>

                <ul className='contacto'>
                    <li>Contacto</li>
                    <li>Ayuda</li>
                    <li>Cómo comprar</li>
                    <li>Términos & Condiciones</li>
                </ul> 

                <ul>
                    <li>Compra 100% segura</li>
                </ul> 

                <ul className='social-media'>
                    <li>Seguinos en
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-twitter"></i>
                        <i class="fab fa-instagram"></i>
                    </li>
                </ul>
        </footer>
    )
}

export default Footer