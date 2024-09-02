//Components 
import Layout from '../../hocs/Layout';
import { useState, useEffect } from 'react';
import Preloader from '../../components/aditional/Preloader';
import { categories } from '../../helpers/CategoriesMenu';
import { dishes } from '../../helpers/MenuPlates';
import { Link } from 'react-router-dom';
//Styles
import '../../styles/menu.css';
//Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
//Images
import category0 from '../../images/category0.png';
import category1 from '../../images/category1.png';
import category2 from '../../images/category2.png';
import category3 from '../../images/category3.png';
import category4 from '../../images/category4.png';
import category5 from '../../images/category5.png';
import category6 from '../../images/category6.png';
import category7 from '../../images/category7.png';
import category8 from '../../images/category8.png';
import category9 from '../../images/category9.png';


const Menu = () => {

	const [loaded, setLoaded] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
    const dishesPerPage = 10;

	useEffect(() => {
		window.scrollTo(0,0)
    	// Simula una carga, por ejemplo, podrías cargar datos aquí
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000); // Ajusta el tiempo según tus necesidades

        return () => clearTimeout(timer);
    }, []);

    const [selectedCategory, setSelectedCategory] = useState(null);

  	const filteredDishes = selectedCategory
    	? dishes.filter(dish => dish.categoryId === selectedCategory.id)
    	: dishes;

    const indexOfLastDish = currentPage * dishesPerPage;
    const indexOfFirstDish = indexOfLastDish - dishesPerPage;
    const currentDishes = filteredDishes.slice(indexOfFirstDish, indexOfLastDish);

    const totalPages = Math.ceil(filteredDishes.length / dishesPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const imageMap = {
	  	0: category0,
	  	1: category1,
	  	2: category2,
	  	3: category3,
	  	4: category4,
	  	5: category5,
	  	6: category6,
	  	7: category7,
	  	8: category8,
	  	9: category9,
	};

	return (
		<Layout>
			<Preloader loaded={loaded} />
			<div className={`content ${loaded ? 'loaded' : ''}`}>
				<div className='container-menu-banner'>
					<h2 className='title-menu-banner'>Bienvenidos</h2>
					<h4 className='subtitle-menu-banner'>Ven a probar los mejores platillos de la ciudad</h4>
				</div>
				<div className='category-filter'>
				    <button className='category-img' onClick={() => setSelectedCategory(null)}>
				        <img src={require(`../../images/menu.png`)} alt='see-all' />
				    </button>
				    {categories.map(category => (
				        <button className='category-img' key={category.id} onClick={() => setSelectedCategory(category)}>
				           	<img src={imageMap[category.id]} alt={`category${category.id}`} />
				        </button>
				    ))}
				</div>
				<div className='container-all-menu'>
					<div className='container-dishes'>
					<h3 className='menu-title'>Menú</h3>
					<div className='dish-list'>
				        {currentDishes.map(dish => (
				          	<Link to={`/menu/detail/${dish.id}`} key={dish.id} className='dish-item' style={{textDecoration: 'none'}}>
				          		<img src={dish.image} alt={dish.name} />
				          		<div className='container-dish-info'>
				           			<p className='text-dish'>{dish.name}</p>
				           			<p className='dish-description'>{dish.description}</p>
				            		<p className='dish-price'>$ {dish.price.toFixed(2)}</p>
				            	</div>
				          	</Link>
				        ))}
      				</div>
      				<div className='pagination'>
                        <button onClick={handlePreviousPage} disabled={currentPage === 1} className='pagination-arrows'><FaArrowLeft /></button>
                        <span>Página {currentPage} de {totalPages}</span>
                        <button onClick={handleNextPage} disabled={currentPage === totalPages} className='pagination-arrows'><FaArrowRight /></button>
                    </div>
                    </div>
				</div>
				<div className='container-banner-fest'>
                    <h2 className='text-swiper'>El mejor servicio para tu fiesta</h2>
                    <p className='subtitle-swiper'>Cumpleaños, Bodas, Aniversarios y más</p>
                    <p className='text-swiper'>Hace tu consulta, nosotros te asesoramos</p>
                    <div className='menu-separator'>
                         <img src={require(`../../images/separador-2.png`)} className='banner-separator' />
                    </div>
                    <Link to='/' className='home-link swiper-link' style={{textDecoration: 'none'}}>Eleginos</Link>
                </div>
			</div>
		</Layout>
	)
}

export default Menu;