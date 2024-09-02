import { Link } from 'react-router-dom';
import {
	FaPhoneAlt,
	FaMapMarkerAlt,
	FaEnvelope,
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaLinkedin,
	FaYoutube,
	FaRegEnvelope	 
} from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";
import { FaXTwitter } from 'react-icons/fa6'
import { TiArrowRightOutline } from "react-icons/ti";

const Footer = () => {
	return (
		<div className='container-footer'>
			<div className='logo-footer'>
				<img src={require(`../../images/logo-ohana.png`)} />
			</div>
			<div className='contain-footer'>
				<div className='container-footer-links'>
					<Link to='/' className='footer-link' style={{textDecoration: 'none'}}>Inicio</Link>
					<Link to='/menu' className='footer-link' style={{textDecoration: 'none'}}>Menú</Link>
					<Link to='/about' className='footer-link' style={{textDecoration: 'none'}}>Sobre Nosotros</Link>
					<Link to='/contact' className='footer-link' style={{textDecoration: 'none'}}>Contacto</Link>
				</div>
				<div className='container-footer-links'>
					<h3 className='footer-social-media'>Nuestras Redes</h3>
					<div className='contain-footer-links'>
						<Link to='https://www.facebook.com/pueblocafeypizzas/?locale=es_LA' className='footer-link-icon facebook' style={{textDecoration: 'none'}}><FaFacebook /></Link>
						<Link to='https://www.instagram.com/pueblocafeypizzas/?hl=es' className='footer-link-icon instagram' style={{textDecoration: 'none'}}><FaInstagram /></Link>
						<Link to='/' className='footer-link-icon whatsapp' style={{textDecoration: 'none'}}><FaWhatsapp /></Link>
						<Link to='/contact#map-section' className='footer-link-icon maps' style={{textDecoration: 'none'}}><SiGooglemaps /></Link>
					</div>
				</div>
				<div className='container-footer-links'>
					<Link to='/policies/cookies' className='footer-link' style={{textDecoration: 'none'}}>Política de Cookies</Link>
					<Link to='/policies/privacy' className='footer-link' style={{textDecoration: 'none'}}>Política de Privacidad</Link>
					<Link to='/policies/purchasing' className='footer-link' style={{textDecoration: 'none'}}>Política de Compras</Link>
				</div>
			</div>
			<div className='container-footer-rights'>
				<p className='container-rights'>
					Ohana Cafetería {new Date().getFullYear()} &copy; Todos los Derechos Reservados
					<span>Elaborado por <Link to='https://k-ching.com' className='footer-links' style={{textDecoration: 'none'}} target='_blank'>K-Ching</Link></span>
				</p>
			</div>
		</div>
	);
};

export default Footer;