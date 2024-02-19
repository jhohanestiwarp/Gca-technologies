GCA-TECHNOLOGIES
La prueba técnica consistió en el desarrollo de una aplicación en Angular 17 que gestionara una plantilla de vendedores con vehículo asignado, llevando a cabo el seguimiento de los mismos mediante una API REST. Esta documentación detalla los aspectos clave del desarrollo realizado, así como las funcionalidades implementadas y los recursos utilizados.

[![8.jpg](https://i.postimg.cc/1zdYdSk5/8.jpg)](https://postimg.cc/DWqgW9ft)
[![6.jpg](https://i.postimg.cc/gkcq357M/6.jpg)](https://postimg.cc/DmDXTCns)
[![7.jpg](https://i.postimg.cc/T2VCVn3P/7.jpg)](https://postimg.cc/Z0q8ZB3k)
[![9.jpg](https://i.postimg.cc/m2qzh5W1/9.jpg)](https://postimg.cc/3dXJc9R3)

Funcionalidades Implementadas
Pantalla Principal
La pantalla principal de la aplicación consta de dos partes:
Lista de Vendedores: Se muestra una lista de vendedores con sus datos obtenidos mediante el consumo de la API REST. Cada elemento de la lista presenta información relevante como el nombre, categoría, dirección, estado de actividad y foto del vendedor.
Mapa de Google: Se presenta un mapa de Google donde se visualizan pines para el seguimiento de los vendedores, con coordenadas proporcionadas por la API. Al hacer clic en un pin en el mapa, se muestra información detallada del vendedor correspondiente.
Interacción con los Vendedores en el Mapa
Al hacer clic en un pin en el mapa, se despliega un diálogo que muestra el nombre del vendedor, su tipo y un botón para ver más detalles. Esta interacción permite al usuario obtener información adicional sobre el vendedor seleccionado sin perder la referencia visual en el mapa.

Creación de Nuevo Vendedor
Se incluyó un botón para crear un nuevo vendedor, lo que abre un formulario emergente donde el usuario puede ingresar los datos del nuevo vendedor. Estos datos se envían a la API REST para su almacenamiento y posterior uso en la aplicación.

Personalización de la Pantalla
Se permitió personalizar una parte de la pantalla, correspondiente a la pestaña 1, donde se colocaron componentes según la elección del desarrollador. Esto permitió una mayor flexibilidad en la presentación de la información y la interacción con el usuario.

Actualización Programada de Datos
Los datos de coordenadas y actividad de los vendedores se actualizan periódicamente mediante el consumo de la API REST. Esto garantiza que la información mostrada en la aplicación esté siempre actualizada y refleje con precisión la ubicación y el estado de los vendedores en tiempo real.

API REST Utilizada
La aplicación consume tres servicios proporcionados por la siguiente API REST:
Listado de Vendedores:
Endpoint: http://74.235.109.154/api/salesman
Verbo HTTP: GET
Respuesta: Listado de objetos con los siguientes campos: id, name, category, address, isActive, coordinates, photo, vehicle.

Datos de Vendedor:
Endpoint: http://74.235.109.154/api/salesman/{id}
Verbo HTTP: GET
Respuesta: Objeto con los mismos campos que el servicio anterior.

Creación de Vendedor:
Endpoint: http://74.235.109.154/api/salesman
Verbo HTTP: POST
Consume: Objeto JSON con los campos: id, name, category, address, photo, vehicle.
Respuesta: Objeto JSON con los mismos campos que el servicio anterior.
Despliegue
La aplicación ha sido desplegada en Netlify y se puede acceder a ella a través del siguiente enlace: 
https://gca-technologies.netlify.app.

Conclusion
La aplicación desarrollada cumplió satisfactoriamente con los requisitos establecidos, proporcionando una interfaz intuitiva y funcional para la gestión y seguimiento de una plantilla de vendedores. Se recomienda realizar pruebas exhaustivas para garantizar el correcto funcionamiento en diferentes entornos y situaciones, así como realizar mejoras continuas basadas en el feedback de los usuarios. Además, se sugiere explorar posibles integraciones con otras plataformas o servicios para ampliar la funcionalidad y el alcance de la aplicación.
