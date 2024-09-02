import Layout from '../../hocs/Layout';
import { FaCircle } from 'react-icons/fa';
import '../../styles/static-pages.css';
import { useEffect } from 'react';


const PrivacyPolicies =({
})=>{

	useEffect(() => {
      	window.scrollTo(0,0)
    }, [])

	return (
		<Layout>
			<div className='container'>
				<div className='container-policies'>
					<h2>Política de Privacidad</h2>
					<p>
						En este sitio, estamos comprometidos con la protección de la privacidad de nuestros usuarios. 
						Esta política de privacidad describe cómo recopilamos, utilizamos y protegemos la información personal que usted proporciona 
						cuando utiliza nuestro sitio web. Al utilizar nuestro sitio web, usted acepta los términos y condiciones de esta política de 
						privacidad.
					</p>
					<h3>Información que Recopilamos:</h3>
					<p>
						Recopilamos información personal que usted nos proporciona voluntariamente, como su nombre, dirección de correo 
						electrónico, número de teléfono, dirección postal, información de pago, entre otros, cuando crea una cuenta, realiza 
						una compra, participa en encuestas o se comunica con nosotros.
					</p>
					<h3>Cómo Utilizamos la Información:</h3>
					<p><FaCircle className='icon-policies' />Utilizamos la información personal que recopilamos para proporcionarle los productos 
						y servicios que solicita, procesar sus transacciones, enviarle comunicaciones relacionadas con su cuenta, responder a sus 
						consultas y proporcionarle soporte al cliente.
						</p>
					<p><FaCircle className='icon-policies' />También podemos utilizar su información personal para mejorar nuestro sitio web, 
						personalizar su experiencia de usuario, administrar concursos, promociones y encuestas, y enviarle información sobre productos, 
						servicios y promociones que creemos que pueden ser de su interés.
					</p>
					<p><FaCircle className='icon-policies' />No vendemos, alquilamos ni compartimos su información personal con terceros no 
						afiliados para fines de marketing sin su consentimiento expreso.
					</p>
					<h3>Seguridad de la Información:</h3>
					<p>
						Implementamos medidas de seguridad administrativas, técnicas y físicas para proteger la información personal que recopilamos y 
						mantenerla segura frente a pérdidas, accesos no autorizados, divulgaciones, alteraciones o destrucciones.
						Sin embargo, tenga en cuenta que ninguna medida de seguridad es infalible y que ninguna transmisión de datos a través de 
						Internet puede garantizarse como completamente segura.
					</p>
					<h3>Cookies y Tecnologías Similares:</h3>
					<p>
						Utilizamos cookies y tecnologías similares para recopilar cierta información automáticamente cuando usted visita nuestro 
						sitio web. Estas tecnologías nos ayudan a mejorar su experiencia de usuario, proporcionar funcionalidades del sitio web y analizar 
						el tráfico del sitio.
						Puede optar por no aceptar cookies a través de la configuración de su navegador, pero tenga en cuenta que esto puede afectar 
						la funcionalidad de nuestro sitio web.
					</p>
					<h3>Enlaces a Terceros:</h3>
					<p>
						Nuestro sitio web puede contener enlaces a sitios web de terceros que no están bajo nuestro control. No somos responsables 
						de las prácticas de privacidad o el contenido de dichos sitios web de terceros. Le recomendamos que revise las políticas de 
						privacidad de estos sitios web antes de proporcionarles cualquier información personal.
					</p>
					<h3>Consentimiento y Cambios en la Política de Privacidad:</h3>
					<p>
						Al utilizar nuestro sitio web, usted acepta los términos de esta política de privacidad. Nos reservamos el derecho de 
						modificar, enmendar o actualizar esta política de privacidad en cualquier momento y sin previo aviso. Cualquier cambio en 
						esta política de privacidad será efectivo cuando se publique en esta página.
					</p>
					<h3>Contacto:</h3>
					<p>
						Si tiene alguna pregunta, inquietud o solicitud relacionada con nuestra política de privacidad, no dude en ponerse en 
						contacto con nosotros a través de los medios de contacto proporcionados en nuestro sitio web.
					</p>
					<p>
						Esta política de privacidad se diseñó para informarle sobre cómo recopilamos, utilizamos y protegemos su información 
						personal en K-Ching. Al utilizar nuestro sitio web, usted acepta los términos y condiciones de esta 
						política de privacidad.
					</p>
				</div>
			</div>
		</Layout>
	)
};

export default PrivacyPolicies;