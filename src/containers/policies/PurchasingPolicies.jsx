import Layout from '../../hocs/Layout';
import { FaCircle, FaRegCircle } from 'react-icons/fa';
import '../../styles/static-pages.css';
import { useEffect } from 'react';
import { FaCaretRight } from "react-icons/fa6";



const PurchasingPolicies =({
})=>{

	useEffect(() => {
      	window.scrollTo(0,0)
    }, [])

	return (
		<Layout>
			<div className='container'>
				<div className='container-policies'>
					<h2>Política de Compras, Envíos y Devoluciones</h2>
					<p>En K-Ching, nos esforzamos por proporcionar a nuestros clientes una experiencia de compra satisfactoria 
						y transparente. Para garantizar la calidad de nuestro servicio y la satisfacción del cliente, hemos desarrollado la siguiente 
						política de compras, envíos y devoluciones:
					</p>
					<h3>Compras:</h3>
					<p><FaCircle className='icon-policies' />Todos los servicios disponibles en nuestro sitio web están sujetos al tiempo de realización 
						del mismo.
					</p>
					<p><FaCircle className='icon-policies' />Los precios de cada servicio están claramente indicados en dólares y son válidos al momento de 
						la compra. Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso. 
					</p>
					<p><FaCircle className='icon-policies' />Para nuestros clientes en Argentina,el valor del dólar sera tomado a valor dólar no oficial o 
						dólar blue, al momento de realizado el pago o la solicitud de servicio.
					</p>
					<p><FaCircle className='icon-policies' />Aceptamos una variedad de métodos de pago seguros para la comodidad de nuestros 
						clientes.
					</p>
					<p><FaCircle className='icon-policies' />Al solicitar alguno de nuestros servicios se debe abonar al menos el 50% (cincuenta por ciento) 
					del costo al momento de la solicitud, y el resto cuando el servicio sea entregado.
					</p>
					<h3>Envíos:</h3>
					<p><FaCircle className='icon-policies' />Procesamos los pedidos dentro de los siguientes plazos hábiles después de recibir el pago:
					</p>
					<div className='policies-spacing'>
						<p><FaRegCircle className='icon-policies' />Videos o imágenes para Instagram: entre 3 y 7 días hábiles.</p>
					</div>
					<div className='policies-spacing'>
						<p><FaRegCircle className='icon-policies' />Sitios web:</p>
						<div className='policies-spacing'>
							<p><FaCaretRight className='icon-policies' />Plan básico: 25 días hábiles.</p>
							<p><FaCaretRight className='icon-policies' />Plan estándar: 30 días hábiles.</p>
							<p><FaCaretRight className='icon-policies' />Plan premium: 50 días hábiles.</p>
						</div>
					</div>
					<p><FaCircle className='icon-policies' />Los clientes recibirán una confirmación de envío por correo electrónico una vez que su pedido 
						haya sido despachado.
					</p>
					<p><FaCircle className='icon-policies' />Los trabajos realizados, sean videos, publicidad o logos, serán enviados a través de correo 
						electrónico a un correo electrónico proporcionado por el cliente.
					</p>
					<p><FaCircle className='icon-policies' />Si solo se paga por la realización de un sitio web y no por su mantenimiento, el sitio web 
						terminado será enviado por correo electrónico.
					</p>
					<h3>Devoluciones y Cambios:</h3>
					<p><FaCircle className='icon-policies' />Al solicitar algún servicio se debe abonar el 50% del costo. Ese dinero en su totalidad solo 
						podrá ser devuelto dentro de los primeros 5 días hábiles desde el momento del pago.
					</p>
					<p><FaCircle className='icon-policies' />Después de los primeros 5 días hábiles, se ofrece una devolución del 50% del dinero abonado 
						hasta los 10 días hábiles.
					</p>
					<p><FaCircle className='icon-policies' />Pasados los 10 días hábiles, no se realizarán devoluciones de dinero.</p>
					<p><FaCircle className='icon-policies' />Los clientes deben comunicarse con nuestro equipo de atención al cliente para solicitar una autorización de devolución dentro de los 
						plazos establecidos.
					</p>
					<h3>Mantenimiento Mensual:</h3>
					<p><FaCircle className='icon-policies' />Para clientes que opten por el servicio de mantenimiento mensual, es importante tener en cuenta lo 
					siguiente:</p>
					<div className='policies-spacing'>
						<p><FaRegCircle className='icon-policies' />Si el servicio de mantenimiento mensual no es pagado, pasado los 60 días 
						de mora, la página web será retirada de línea.</p>
					</div>
					<div className='policies-spacing'>
						<p><FaRegCircle className='icon-policies' />Para reactivar la página web, se deberá abonar el costo de un mes extra de mantenimiento 
						además de la deuda pendiente.</p>
					</div>
					<p>Esta política de compras, envíos y devoluciones es aplicable a todas las transacciones realizadas en K-Ching. 
						Nos comprometemos a cumplir con los más altos estándares de servicio al cliente y a resolver cualquier problema de manera justa 
						y eficiente. Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto con nuestro equipo de atención al cliente. 
						¡Gracias por elegirnos como tu destino de compras en línea!
					</p>
				</div>
			</div>
		</Layout>
	)
};

export default PurchasingPolicies;