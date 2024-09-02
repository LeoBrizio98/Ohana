import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
//Components 
import Preloader from './components/aditional/Preloader';
//Error
import Error404 from './containers/errors/Error404';
// Static Pages
import Home from './containers/pages/Home';
import About from './containers/pages/About';
import Contact from './containers/pages/Contact';
import Menu from './containers/pages/Menu';
import DishDetail from './containers/pages/DishDetail';
// Policies
import CookiesPolicies from './containers/policies/CookiesPolicies';
import PrivacyPolicies from './containers/policies/PrivacyPolicies';
import PurchasingPolicies from './containers/policies/PurchasingPolicies';


function App() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
    // Simula una carga, por ejemplo, podrías cargar datos aquí
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000); // Ajusta el tiempo según tus necesidades

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Preloader loaded={loaded} />
            <div className={`content ${loaded ? 'loaded' : ''}`}>
                <Router>
                    <Routes>
                        {/* Error Display */}
                        <Route path='*' element={<Error404 />} />

                        {/* Static Pages */}
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/about' element={<About />} />
                        <Route exact path='/contact' element={<Contact />} />
                        <Route exact path='/menu' element={<Menu />} />
                        <Route exact path='/menu/detail/:dishId' element={<DishDetail />} />

                        {/* Policies */}
                        <Route exact path='/policies/cookies' element={<CookiesPolicies />} />
                        <Route exact path='/policies/privacy' element={<PrivacyPolicies />} />
                        <Route exact path='/policies/purchasing' element={<PurchasingPolicies />} />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
