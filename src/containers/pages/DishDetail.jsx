//Components 
import Layout from '../../hocs/Layout';
import { useState, useEffect } from 'react';
import Preloader from '../../components/aditional/Preloader';
import { dishes } from '../../helpers/MenuPlates';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
	FaFacebook,
	FaInstagram,
	FaWhatsapp,
	FaXTwitter,
	FaRegSquarePlus,
	FaRegSquareMinus,
} from 'react-icons/fa6';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//Styles
import '../../styles/menu.css';


const MenuDetail = () => {

	const params = useParams();
	const dishId = params.dishId;
	const [loaded, setLoaded] = useState(false);
	const [dish, setDish] = useState(null);

	useEffect(() => {
		window.scrollTo(0,0)
    	// Simula una carga, por ejemplo, podrías cargar datos aquí
        const timer = setTimeout(() => {
        	const selectedDish = dishes.find(d => d.id === parseInt(dishId, 10));
            setDish(selectedDish);
            setLoaded(true);
        }, 2000); // Ajusta el tiempo según tus necesidades

        return () => clearTimeout(timer);
    }, [dishId]);

	return (
		<Layout>
			<Preloader loaded={loaded} />
			<div className={`content ${loaded ? 'loaded' : ''}`}>
				{dish ? (
                    <div className='container-dish-detail'>
                    	<div className='contain-dish-detail'>
                    		<div className='container-dish-image'>
		                    	<div className='contain-dish-image'>
		                        	<img src={dish.image} alt={dish.name} />
		                        </div>
	                        </div>
	                        <div className='contain-dish-info'>
	                        	<h2>{dish.name}</h2>
	                        	<p className='description-text'>{dish.description}</p>
	                        	<p className='price-text'>$ {dish.price}</p>
	                        	<div className='container-share-links'>
	                        		<p>Compartir</p>
	                        		<div className='link-to-share'>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaFacebook /></Link>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaInstagram /></Link>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaWhatsapp /></Link>
	                        			<Link to='/' className='share-links' style={{textDecoration: 'none'}}><FaXTwitter /></Link>
	                        		</div>
	                        	</div>
	                        	<div className='container-add-quantity'>
	                        		<div className='container-quantity'>
	                        			<button className='button-add-minus'><FaRegSquareMinus /></button>
	                        			<p>2</p>
	                        			<button className='button-add-minus'><FaRegSquarePlus /></button>
	                        		</div>
	                        		<button className='button-link'>
	                        			<div className='box-reserve'>
	                        				<div className='inner-box-reserve'>
	                        					<h4>Añadir pedido</h4>
	                        				</div>
	                        			</div>
	                        		</button>
	                        	</div>
	                        </div>
                        </div>
                        <div>
                    		<Link to='/menu' className='back-to-menu' style={{textDecoration: 'none'}}><FaArrowLeft className='icon-back' />Volver al menú</Link>
                		</div>
                    </div>
                ) : (
                	<div>
                    <p>Plato no encontrado.</p>
                    	<Link to='/menu' className='' style={{textDecoration: 'none'}}>Volver al menú</Link>
                	</div>
                )}
                
			</div>
		</Layout>
	)
}

export default MenuDetail;