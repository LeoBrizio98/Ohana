//Components
import Layout from '../../hocs/Layout';
import Preloader from '../../components/aditional/Preloader';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
//Styles
import '../../styles/static-pages.css';
//Icons
import { FaFacebook, FaInstagram } from 'react-icons/fa6';


const About = () => {

	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		window.scrollTo(0,0)
    	// Simula una carga, por ejemplo, podrías cargar datos aquí
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 4000); // Ajusta el tiempo según tus necesidades

        return () => clearTimeout(timer);
    }, []);

	return (
		<Layout>
			<Preloader loaded={loaded} />
			<div className={`content ${loaded ? 'loaded' : ''}`}>
				<div className='container-about-banner'>
					<h2 className='title-about-banner'>Un lugar para estar en familia</h2>
				</div>
				<div className='container-about-history'>
					<div className='contain-about-history'>
						<h3 className='history-title'>Bienvenidos a Ohana</h3>
						<div>
							<img src={require(`../../images/separador-4.png`)} className='image-separator' />
						</div>
						<p>Un lugar donde la calidez familiar se combina con el inconfundible aroma del café recién preparado. Desde 2019, hemos 
						sido un espacio de encuentro en Río Primero, donde quienes nos visitan pueden disfrutar de una experiencia única: desde 
						una taza de café hecha con amor, hasta un nutritivo desayuno o una deliciosa comida para compartir con los seres queridos.</p>
					</div>
					<div>
						<img src='' />
					</div>
				</div>
				<div className='container-home-how'>
					<div className='container-home-section'>
						<p>Porque elegirnos</p>
						<img src={require(`../../images/separador-2.png`)} className='image-separator' />
					</div>
					<div className='contain-home-how'>
						<div className='boxes-how-work'>
							<img src={require(`../../images/amor.png`)} className='how-img'/>
							<h4 className='how-box-title'>Cocinado con Amor</h4>
							<p>Cada platillo que preparamos lleva un toque especial de cariño, creando sabores únicos y reconfortantes</p>
						</div>
						<div className='boxes-how-work'>
							<img src={require(`../../images/cena.png`)} className='how-img'/>
							<h4 className='how-box-title'>Ambiente Agradable</h4>
							<p>Disfruta de una experiencia placentera en un entorno acogedor, pensado para que te sientas como en casa</p>
						</div>
						<div className='boxes-how-work'>
							<img src={require(`../../images/cocinero.png`)} className='how-img'/>
							<h4 className='how-box-title'>Ingredientes Frescos</h4>
							<p>Seleccionamos ingredientes frescos de la mejor calidad para garantizar sabores auténticos y deliciosos</p>
						</div>
						<div className='boxes-how-work'>
							<img src={require(`../../images/globo.png`)} className='how-img'/>
							<h4 className='how-box-title'>Decoración de Eventos</h4>
							<p>Transformamos tus momentos especiales en experiencias inolvidables con nuestras decoraciones elegantes y creativas</p>
						</div>
					</div>
				</div>
				<div className='container-about-experience'>
					<div className='about-experience-img'>
						<img src={require(`../../images/ohana.jpg`)} />
					</div>
					<div className='contain-about-experience'>
						<p>En Ohana, creemos en la importancia de la familia y las conexiones. Ya sea que vengas a relajarte, a compartir una charla 
						con amigos o a disfrutar de un momento tranquilo para ti, queremos que sientas la calidez de nuestro hogar. Con un ambiente 
						acogedor, una decoración que te invita a quedarte, y un equipo que te recibe con una sonrisa, nos esforzamos por ser más que 
						una cafetería: queremos ser tu refugio en la ciudad.</p>
						<Link to='/menu' className='button-link' style={{textDecoration: 'none'}}>
							<div className='box-reserve'>
								<div className='inner-box-reserve'>
									<h4>Nuestro Menú</h4>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='container-about-gratitude'>
					<h3 className='gratitude-title'>Gracias por hacernos parte de tus momentos especiales. ¡Te esperamos con los brazos abiertos!</h3>
					<p className='gratitude-text'>¡Siguenos en Redes!</p>
					<div>
						<div className='contain-social-media'>
							<Link to='/' className='social-media-about' style={{textDecoration: 'none'}}><FaFacebook /></Link>
							<Link to='/' className='social-media-about' style={{textDecoration: 'none'}}><FaInstagram /></Link>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default About;