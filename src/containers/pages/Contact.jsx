// Components
import Layout from '../../hocs/Layout';
import { useState, useEffect, useRef } from 'react';
import Preloader from '../../components/aditional/Preloader';
import { GoogleMapsEmbed } from '../../components/aditional/GoogleMapsEmbed';
import emailjs from '@emailjs/browser';
import { Link, useLocation } from 'react-router-dom';
// Styles
import '../../styles/components.css';
// Icons
import {
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaPinterest,
	FaTelegramPlane,
	FaYoutube,
} from "react-icons/fa6";


const Contact = () => {

	const [loaded, setLoaded] = useState(false);
	const form = useRef();
    const [sendedEmail, setSendedEmail] = useState(false);

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
		window.scrollTo(0,0)
    	// Simula una carga, por ejemplo, podrías cargar datos aquí
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000); // Ajusta el tiempo según tus necesidades

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
				<div className='container-contact-banner'>
					<h2 className='title-contact-banner'>Contacta con Nosotros</h2>
				</div>
				<div className='container-contact-form'>
					<div className='container-contact-social'>
						<div className='container-contact-logo'>
							<img src={require(`../../images/logo-ohana.png`)} />
						</div>
						<p className='contact-social-text'>Haz tu reservación o contáctanos</p>
						<div className='contain-contact-info'>
							<div className='container-contact-section'>
								<p>Dirección</p>
								<img src={require(`../../images/separador-1.png`)} className='image-separator' />
							</div>
							<p className='contact-info-text'>Sarmiento 140, Río Primero - Córdoba</p>
						</div>
						<div className='contain-contact-info'>
							<div className='container-contact-section'>
								<p>Teléfono</p>
								<img src={require(`../../images/separador-1.png`)} className='image-separator' />
							</div>
							<p className='contact-info-text'>+54 3574-403855</p>
						</div>
						<div className='contain-contact-info'>
							<div className='container-contact-section'>
								<p>Horarios</p>
								<img src={require(`../../images/separador-1.png`)} className='image-separator' />
							</div>
							<p className='contact-info-text'>Cafeteria</p>
							<p className='contact-info-text small-text'>Todos los días 07:00 - 12:00hs</p>
							<p className='contact-info-text small-text'>Por la tarde 16:30 - 20:30hs</p>
						</div>
						<div className='container-social-media'>
							<h3>Nuestras Redes</h3>
							<div className='contain-social-media'>
								<Link to='/' className='social-media-contact' style={{textDecoration: 'none'}}><FaFacebook /></Link>
								<Link to='/' className='social-media-contact' style={{textDecoration: 'none'}}><FaInstagram /></Link>
							</div>
						</div>
					</div>
					<form className='contact-form' ref={form} onSubmit={sendEmail}>
				        <div className='contain-contact-form'>
				           	<div className='container-contact-divider'> 
				                <div className='input-contact'>
				                    <input
				                    	type='text'
				                    	name='user_name'
				                    	className='input-contact-form'
				                    	required
				                    />
				                    <span>Nombre</span>
				                    <i></i>
				                </div>
				                <div className='input-contact'>
				                    <input
				                    	type='email'
				                    	name='user_email'
				                    	className='input-contact-form'
				                    	required
				                    />
				                    <span>Email</span>
				                    <i></i>
				                </div>
				            </div>
				            <div className='container-contact-divider'>
				                <div className='input-contact'>
				                    <input 
				                    	type='text' 
				                    	name='subject' 
				                    	className='input-contact-form' 
				                    	required 
				                    />
				                    <span>Asunto</span>
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
				            <div className='input-contact-msg'>
				                <textarea name='message' className='input-contact-form' required></textarea>
				                <span>Mensaje</span>
				                <i></i>
				            </div>
				            <div className='container-required-submit'>
					            <p className='required-fields'>Todos los campos son obligatorios</p>
					            <div className='container-submit-button'>
					            	{sendedEmail ? (
					                	<p className='submited-contact-button'>Enviado</p>
					            	) : (
					                	<button type='submit' value='' className='button-link'>
					                		<div className='box-reserve'>
					                			<div className='inner-box-reserve'>
					                				<h4>Enviar</h4>
					                			</div>
					                		</div>
					                	</button>
					            	)}
					            </div>
				            </div>
				        </div>
				    </form>
				</div>
				<div className='container-contact-maps' id='map-section'>
					<GoogleMapsEmbed />
				</div>
			</div>
		</Layout>
	)
}

export default Contact;