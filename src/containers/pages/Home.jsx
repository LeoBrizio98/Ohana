//Components
import Layout from '../../hocs/Layout';
import Preloader from '../../components/aditional/Preloader';
import { AutoSwiper } from '../../components/aditional/AutoSwiper';
import { TestimonialSwiper } from '../../components/aditional/TestimonialSwiper';
import { dishes } from '../../helpers/MenuPlates';
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
//Style
import '../../styles/static-pages.css';
//Icons
import { BsBookmarkStar } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";
import { MdAccessTime, MdOutlineCalendarToday } from "react-icons/md";


const Home = () => {

	const [loaded, setLoaded] = useState(false);
	const form = useRef();
    const [sendedEmail, setSendedEmail] = useState(false);
    const [limitedDishes, setLimitedDishes] = useState([]);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_mpalr4a', 'template_3pslp3t', form.current, {
                publicKey: 'nfd_phSCzilgjQfDr',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSendedEmail(true);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

	useEffect(() => {
		window.scrollTo(0,0);
		setLimitedDishes(dishes.slice(0, 10));
    	// Simula una carga, por ejemplo, podrías cargar datos aquí
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 4000); // Ajusta el tiempo según tus necesidades

        return () => clearTimeout(timer);
    }, []);

    const { hash } = useLocation();

  	useEffect(() => {
    	if (hash) {
      		const element = document.querySelector(hash);
      		if (element) {
        		element.scrollIntoView({ behavior: 'smooth' });
      		}
    	}
  	}, [hash]);

	return (
		<Layout>
			<Preloader loaded={loaded} />
			<div className={`content ${loaded ? 'loaded' : ''}`}>
				<div className='container-home-banner'>
					<AutoSwiper />
				</div>
				<div className='container-home-reserve'>
					<div className='contain-home-reserve'>
						<div className='specialities-home-title'>
							<p>Celebra con nosotros</p>
							<img src={require(`../../images/separador-1.png`)} className='image-separator' />
						</div>
						<p>Tu cumpleaños, aniversario, evento o reunión especial</p>
						<Link to='/#reservation-form' className='button-link' style={{textDecoration: 'none'}}>
							<div className='box-reserve'>
								<div className='inner-box-reserve'>
									<h4>Ir Ahora</h4>
								</div>
							</div>
						</Link>
					</div>
					<div className='reserve-img'>
						<img src={require(`../../images/reserve.jpg`)} />
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
				<div className='container-home-about'>
					<div className='home-about-img'>
						<img src={require(`../../images/ohana.jpg`)} />
					</div>
					<div className='contain-home-about'>
						<div className='specialities-home-title'>
							<p>Nuestra Historia</p>
							<img src={require(`../../images/separador-1.png`)} className='image-separator' />
						</div>
						<div>
							<p className='contain-about-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus facilisi, donec blandit ut lacus sed nostra nisi vulputate lacinia, luctus dui eleifend habitant risus nibh curabitur velit. Himenaeos venenatis faucibus nibh vulputate aptent porttitor platea primis luctus ac sollicitudin gravida lacus vel, conubia maecenas eget orci parturient convallis augue ullamcorper egestas blandit porta vestibulum. Class fusce purus montes litora congue volutpat primis hac natoque, dui vestibulum penatibus phasellus duis porttitor magnis in iaculis mi, massa sem nostra proin nullam imperdiet habitant risus.</p>
						</div>
						<Link to='/about' className='button-link' style={{textDecoration: 'none'}}>
							<div className='box-reserve'>
								<div className='inner-box-reserve'>
									<h4>Conocenos</h4>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='container-home-products'>
					<div className='contain-home-products'>
						<div className='container-product-title'>
							<h2 className='titles-home product-title'>Nuestros Productos</h2>
							<img src={require(`../../images/separador-2.png`)} className='image-separator' />
						</div>
						<p className='contain-product-text'>Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus facilisi, donec blandit ut lacus sed nostra nisi vulputate lacinia, luctus dui eleifend habitant risus nibh curabitur velit.</p>
						<Link to='/menu' className='home-link' style={{textDecoration: 'none'}}>Ver Más</Link>
					</div>
					<div></div>
				</div>
				<div className='container-home-specialities'>
					<div className='specialities-home-title'>
						<p>Explore Nuestro Menú</p>
						<img src={require(`../../images/separador-1.png`)} className='image-separator' />
					</div>
					<div className='contain-home-specialities'>
						<div className='speciality-boxes-grid'>
						{limitedDishes.length > 0 ? 
							(limitedDishes.map((dish) => (
								<Link to={`/menu/detail/${dish.id}`} key={dish.id} className='speciality-boxes' style={{textDecoration: 'none'}}>
									<div className='speciality-home-img'>
										<img src={dish.image} />
									</div>
									<div className='speciality-boxes-info'>
										<div className='speciality-first-line'>
											<div className='speciality-title'>
												<p>{dish.name}</p>
											</div>
											<div className='container-line-separator'>
												<span className='line-separator separator-1'></span>
											</div>
											<p className='speciality-price'>$ {dish.price.toFixed(2)}</p>
										</div>
										<div>
											<p className='speciality-description'>{dish.description}</p>
										</div>
									</div>
								</Link> 
							)))
						: 
							<>No hay productos para mostrar</>
						}
					</div>
					</div>
					<div className='container-specialities-link'>
						<p>Te esperamos de Lunes a Domingo</p>
						<Link to='/menu' className='button-link' style={{textDecoration: 'none'}}>
							<div className='box-reserve'>
								<div className='inner-box-reserve'>
									<h4>Ver menú</h4>
								</div>
							</div>
						</Link>
					</div>
				</div>
				<div className='container-home-contact' id='reservation-form'>
					<div className='contain-home-contact'>
						<div className='container-home-reservation'>
							<div className='specialities-home-title'>
								<p>Reservación Online</p>
								<img src={require(`../../images/separador-1.png`)} className='image-separator' />
							</div>
							<div className='reservation-input-select'>
								<div className='reservation-first-line'>
									<div className='input-contact'>
					                    <input
											name='phone'
											type='text'
											className='input-contact-form'
											required
										/>
										<span>Nombre</span>
										<i></i>
					                </div>
					                <div className='input-contact'>
					                    <input
											name='phone'
											type='text'
											className='input-contact-form'
											required
										/>
										<span>Teléfono</span>
										<i></i>
					                </div>
				            	</div>
				            	<div className='reservation-second-line'>
									<div className='wrapper-select'>
										<LuUser2 className='icon-select' />
					                    <select className='select-contact'>
											<option value='1-persona'>1 Persona</option>
											<option value='2-personas'>2 Personas</option>
											<option value='3-personas'>3 Personas</option>
											<option value='4-personas'>4 Personas</option>
											<option value='5-personas'>5 Personas</option>
											<option value='6-personas'>6 Personas</option>
											<option value='7-personas'>7 Personas</option>
											<option value='8-personas'>8 Personas</option>
											<option value='9-personas'>9 Personas</option>
										</select>
										<FaAngleDown className='icon-select' />
					                </div>
					                <div className='wrapper-select'>
										<MdOutlineCalendarToday className='icon-select' />
					                    <input type='date' className='select-contact' />
					                    <FaAngleDown className='icon-select' />
					                </div>
					                <div className='wrapper-select'>
										<MdAccessTime className='icon-select' />
					                    <select className='select-contact'>
											<option value='08:00hs'>08 : 00 hs</option>
											<option value='09:00hs'>09 : 00 hs</option>
											<option value='10:00hs'>10 : 00 hs</option>
											<option value='11:00hs'>11 : 00 hs</option>
											<option value='16:00hs'>16 : 00 hs</option>
											<option value='17:00hs'>17 : 00 hs</option>
											<option value='18:00hs'>18 : 00 hs</option>
											<option value='19:00hs'>19 : 00 hs</option>
											<option value='20:00hs'>20 : 00 hs</option>
											<option value='21:00hs'>21 : 00 hs</option>
											<option value='22:00hs'>22 : 00 hs</option>
										</select>
										<FaAngleDown className='icon-select' />
					                </div>
				            	</div>
					            <div className='input-contact-msg'>
					                <textarea name='message' className='input-contact-form' required></textarea>
					                <span>Mensaje</span>
					                <i></i>
					            </div>
					            <div className='container-required-submit'>
						            <div className='container-submit-button'>
						            	{sendedEmail ? (
						                	<p className='submited-contact-button'>Enviado</p>
						            	) : (
						                	<button type='submit' value='' className='button-link'>
						                		<div className='box-reserve'>
						                			<div className='inner-box-reserve'>
						                				<h4>Haz una reserva</h4>
						                			</div>
						                		</div>
						                	</button>
						            	)}
						            </div>
					            </div>
							</div>
						</div>
						<div className='home-contact-content'>
							<div className='container-product-title'>
								<h2 className='titles-home product-title'>Contáctenos</h2>
								<img src={require(`../../images/separador-2.png`)} className='image-separator' />
							</div>
							<div>
								<div className='contact-home-item'>
									<h4 className='titles-reservation'>Haz tu Reservación</h4>
									<p className='home-link phone-item'>+123 456-7890</p>
								</div>
								<div className='contact-home-items'>
									<div className='contact-home-item'>
										<h4 className='titles-reservation'>Ubicación</h4>
										<div className='home-contact-info'>
											<p>Av. San Martín 98, Río Primero,</p>
											<p>Córdoba - Argentina</p>
										</div>
									</div>
									<div className='contact-home-item'>
										<h4 className='titles-reservation'>Horarios</h4>
										<div className='home-contact-info'>
											<p>Lunes a Domingo</p>
											<p>7:00 - 12:30 hs.</p>
											<p>16:30 - 20:30 hs.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container-home-reviews'>
					<div className='specialities-home-title'>
						<p>Reseñas y Testimonios</p>
						<img src={require(`../../images/separador-1.png`)} className='image-separator' />
					</div>
					<div className='contain-home-reviews'>
						<TestimonialSwiper />
					</div>
				</div>			
			</div>
		</Layout>
	)
}

export default Home;