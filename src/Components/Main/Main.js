import paraguas from '../../img/paraguas.png'
import backpack from '../../img/backpack.png'
import cart from '../../img/cart.png'
import pack from '../../img/packs.png'
 
import '../../css/Main.css'
 
const Main = () => {
    return (
        <main>
            <section className='imagen-btn'>
                <button>Shop</button>
            </section>

            <section className='section-info'>
                <img className='image-item' src={paraguas} alt='paraguas azul inclinado a la derecha'/>
                <h2>Pufi <span>rain</span></h2>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#">&gt; Ver más</a>
            </section>

            <section className='section-info'>
                <img className='image-item' src={backpack} alt='paraguas azul inclinado a la derecha'/>
                <h2>Pufi <span>puff</span></h2>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#">&gt; Ver más</a>
            </section>

            <section className='imagen-bg'>
            </section>

            <section className='imagen-bg bg-niño'>
            </section>

            <section className='section-info'>
                <img className='image-item' src={cart} alt='paraguas azul inclinado a la derecha'/>
                <h2>Pufi <span>cart</span></h2>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#">&gt; Ver más</a>
            </section>

            <section className='section-info'>
                <img className='image-item' src={pack} alt='paraguas azul inclinado a la derecha'/>
                <h2>Pufi <span>nap</span></h2>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#">&gt; Ver más</a>
            </section>

            <section className='imagen-bg bg-nap'>
            </section>
        </main>
    )
}

export default Main