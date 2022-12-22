import ig1 from '../../img/ig-1.jpg'
import ig2 from '../../img/ig-2.jpg'
import ig3 from '../../img/ig-3.jpg'
import ig4 from '../../img/ig-4.jpg'
import ig5 from '../../img/ig-5.jpg'
import ig6 from '../../img/ig-6.jpg'
import Form from '../Form/Form.js'
 
import '../../css/Section.css'

const Sectionig = () => {
    return (
        <section className='social'>
            <h2>Instagram</h2>
            <p className='hashtag'>#ESPUFI</p>

            <div className="images">
                <img src={ig1} alt=''/>
                <img src={ig2} alt=''/>
                <img src={ig3} alt=''/>
                <img src={ig4} alt=''/>
                <img src={ig5} alt=''/>
                <img src={ig6} alt=''/>
            </div>

            <div className='newsform'>
                <h2 className='newsletter'>Newsletter</h2>
                <p className='suscribe'>Suscribite</p>
                <p>Y enterate de todas las novedades</p>
            </div>

            <Form />
        </section>
    )
}

export default Sectionig