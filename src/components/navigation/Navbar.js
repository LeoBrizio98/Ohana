import { NavLink, Link } from 'react-router-dom';
import { Fragment, useState, useRef } from 'react';
import { Menu } from '@headlessui/react'
import { Navigate } from 'react-router';
import { useEffect } from 'react';
//Styles
import '../../styles/navigation.css';
//Icons
import { IoBagHandleOutline, IoHeartOutline } from 'react-icons/io5';
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { LuUser2 } from "react-icons/lu";


function Navbar({

}) {

	const [menuOpen, setMenuOpen] = useState(false);
	const navbarRef = useRef(null);
  	const overlayRef = useRef(null);
  	const navTogglerRefs = useRef([]);

	const toggleMenu = () => {
    	setMenuOpen(!menuOpen);
  	};

  	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.querySelector('.container-navbar');
			if (window.scrollY > 50) { // Cambia el valor según sea necesario
				navbar.classList.add('scrolled');
			} else {
				navbar.classList.remove('scrolled');
			}
		};

		window.addEventListener('scroll', handleScroll);

		// Limpia el evento cuando el componente se desmonta
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>	
			<div className='container-navbar'>
				<Link to='/' className='navbar-logo'>
					<img src={require(`../../images/logo-ohana.png`)} alt='Ohana - Home' />
				</Link>
				<div className='navbar-pc-list'>
			      	<NavLink to='/' style={{textDecoration: 'none'}} className={`navbar-menu ${isActive => isActive ? 'active' : ''}`}>Inicio</NavLink>
			      	<NavLink to='/menu' style={{textDecoration: 'none'}} className={`navbar-menu ${isActive => isActive ? 'active' : '' }`}>Menú</NavLink>
			      	<NavLink to='/about' style={{textDecoration: 'none'}} className={`navbar-menu ${isActive => isActive ? 'active' : '' }`}>Sobre Nosotros</NavLink>
			      	<NavLink to='/contact' style={{textDecoration: 'none'}} className={`navbar-menu ${isActive => isActive ? 'active' : '' }`}>Contacto</NavLink>
			    </div>
				<div className={`navbar ${menuOpen ? 'menu-active' : ''}`} data-navbar>
					<button onClick={toggleMenu} className='close-btn' aria-label='close menu' data-nav-toggler>
			        	<IoClose name='close' />
			      	</button>
			      	<Link to='/' className='navbar-logo-phone'>
			      		<img src={require(`../../images/logo-ohana.png`)} alt='Ohana - Home' />
			      	</Link>
			      	<div className='navbar-list'>
			      		<div className='navbar-item'>
			      			<NavLink to='/' style={{textDecoration: 'none'}} className={`navbar-link hover-underline ${isActive => isActive ? 'active' : ''}`}>
			      				<div className='separator'><FaChevronRight /></div>
			      				<span className='span-nav'>Inicio</span>
			      			</NavLink>
			      		</div>
			      		<div className='navbar-item'>
			      			<NavLink to='/menu' style={{textDecoration: 'none'}} className={`navbar-link hover-underline ${isActive => isActive ? 'active' : '' }`}>
			      				<div className='separator'><FaChevronRight /></div>
			      				<span className='span-nav'>Menú</span>
			      			</NavLink>
			      		</div>
			      		<div className='navbar-item'>
			      			<NavLink to='/about' style={{textDecoration: 'none'}} className={`navbar-link hover-underline ${isActive => isActive ? 'active' : '' }`}>
			      				<div className='separator'><FaChevronRight /></div>
			      				<span className='span-nav'>Sobre Nosotros</span>
			      			</NavLink>
			      		</div>
			      		<div className='navbar-item'>
			      			<NavLink to='/contact' style={{textDecoration: 'none'}} className={`navbar-link hover-underline ${isActive => isActive ? 'active' : '' }`}>
			      				<div className='separator'><FaChevronRight /></div>
			      				<span className='span-nav'>Contacto</span>
			      			</NavLink>
			      		</div>
			      	</div>
			      	<div className='text-center'>
			      		<p className='headline-1 navbar-title'>Visitanos</p>
			      		<div className='body-4'>
			      			Av. Sarmiento 140, Río Primero, <br/>
			      			Córdoba, Argentina.
			      		</div>
			      		<p className='body-4 navbar-text'>Abierto: 7:00 a 12:00 - 17:00 a 20:30 hs.</p>
			      		<Link to='mailto:ohanacafeteria@gmail.com' className='body-4 sidebar-link' style={{textDecoration: 'none'}}>
			      			pueblopizzas@gmail.com
			      		</Link>
			      		<div className='separator'></div>
			      		<p className='contact-label'>Reservaciones</p>
			      		<Link to='' className='body-1 contact-number hover-underline' style={{textDecoration: 'none'}}>+1-123-456-7890</Link>
			      	</div>
				</div>
				<button className='nav-open-btn' id='menu-toggle' aria-label='open menu' data-nav-toggler onClick={toggleMenu}>
					<span className='line line-1'></span>
					<span className='line line-2'></span>
					<span className='line line-3'></span>
				</button>
				<div className={`overlay ${menuOpen ? 'active-overlay' : ''}`} ref={overlayRef} data-nav-toggler data-overlay></div>
			</div>
		</>
	);
};

export default Navbar;