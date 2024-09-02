import Layout from '../../hocs/Layout';
import { FaCircle } from 'react-icons/fa';
import '../../styles/static-pages.css';
import { useEffect } from 'react';


const CookiesPolicies =({
})=>{

	useEffect(() => {
      	window.scrollTo(0,0)
    }, [])

	return (
		<Layout>
			<div className='container'>
				<div className='container-policies'>
					<h2>Política de Cookies</h2>
					<p>
						Esta Política de Cookies explica cómo este sitio utiliza cookies y tecnologías 
						similares para reconocerte cuando visitas nuestro sitio web. Explica qué son estas tecnologías y 
						por qué las utilizamos, así como tus derechos para controlar nuestro uso de ellas.
					</p>
					<h3>¿Qué son las cookies?</h3>
					<p>
						Las cookies son pequeños archivos de texto que se colocan en tu dispositivo para almacenar datos que pueden ser recuperados por un 
						servidor web en el dominio que colocó la cookie. Utilizamos cookies e identificadores similares para varios fines, como recordar tus 
						preferencias, realizar un seguimiento de las visitas al sitio web y mejorar tu experiencia de usuario general.
					</p>
					<h3>Tipos de cookies que utilizamos</h3>
					<div>
						<p className='subtitle-policies'><FaCircle className='icon-policies' />Cookies esenciales:
							<span> Estas cookies son esenciales para proporcionarte servicios disponibles 
							a través de nuestro sitio web y para permitirte usar algunas de sus funciones. Por ejemplo, nos permiten recordar los productos 
							que has agregado al carrito de compras.
							</span>
						</p>
						<p className='subtitle-policies'><FaCircle className='icon-policies' />Cookies de rendimiento y análisis: 
							<span> Estas cookies nos permiten reconocer y contar el número de visitantes y ver cómo se mueven por el sitio web mientras lo 
							usan. Esto nos ayuda a mejorar el funcionamiento de nuestro sitio web, por ejemplo, asegurándonos de que los usuarios encuentren 
							fácilmente lo que buscan.
							</span>
						</p>
						<p className='subtitle-policies'><FaCircle className='icon-policies' />Cookies de funcionalidad: 
							<span> Estas cookies se utilizan para reconocerte cuando regresas a nuestro sitio web y nos permiten personalizar 
							nuestro contenido para ti, saludarte por tu nombre y recordar tus preferencias (por ejemplo, tu idioma o región).
							</span>
						</p>
					</div>
					<h3>Control de cookies</h3>
					<p>
						Puedes controlar y administrar las cookies de varias formas. Ten en cuenta que eliminar o bloquear cookies puede afectar tu 
						experiencia de usuario y algunas partes de nuestro sitio web pueden volverse inaccesibles.
					</p>

					<h3>Cambios en nuestra política de cookies</h3>
					<p>
						Nos reservamos el derecho de modificar esta Política de Cookies en cualquier momento y por cualquier motivo. Te animamos a 
						revisar periódicamente esta página para estar informado sobre cómo estamos utilizando cookies.
					</p>
					<h3>Contacto</h3>
					<p>Si tienes preguntas sobre nuestra Política de Cookies, contáctanos en contactokching@gmail.com.</p>
					<p>Esta Política de Cookies fue actualizada por última vez el 1 de Julio de 2024.</p>
				</div>
			</div>
		</Layout>
	)
};

export default CookiesPolicies;