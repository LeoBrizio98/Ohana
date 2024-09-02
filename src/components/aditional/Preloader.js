import '../../styles/components.css'


const Preloader = ({ loaded }) => {
    return (
        <div className={`preload ${loaded ? 'loaded' : ''}`}>
            <div className="circle"></div>
            <div className="text">OHANA</div>
        </div>
    );
};

export default Preloader;