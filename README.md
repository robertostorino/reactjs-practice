# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# Agregar CSS a REACTJS
	-Agregar CSS mediante style a una etiqueta
		<div style={{
			  width: '100%',
			  maxWidth: '600px',
			  margin: '0 auto',
			  background: 'red'
		  }}>
		  
		  - No es recomendable utilizar estilos en línea.
		    1) El navegador está más optimizado para CSS que para los estilos en línea
			2) No se pueden reutilizar
			
		  - Recomendable: Para propiedades dinámicas
		  
    - CSS
		Puedo tener un archivo css por cada componente, de forma de tener los estilos que dicho componente utilizará.
		Tener en cuente que en este caso los estilos son globales, es decir, en cualquier parte puedo utilizar los estilos, no solo en el componente que lo importa.
		
		Se crea un componente "componente.jsx" y su css asociado "componente.css"
		OJO: Las clases en estilos no se pueden repetir
		
		Problema: 
			- Se debe prestar atención a no repetir ninguna clase en ningún componente.
		    - Con Css no se puede lograr que el CSS sea relativo al componente y solo exista dentro del componente.
			   Con CSS normal se importa la hoja de estilos o no se importa, pero no hay punto medio.
			   
			
	- CSS MODULES

         Para convertir un archivo css a un módulo css debo agregar ".module" en el nombre:

         ejemplo:   VideoItem.css -> VideoItem.module.css
		
		 Mi CSS:
				.container {
					padding: .75rem;
					border: 1px solid gray;
					border-radius: 0.5rem;

					margin: .75rem 0;
				}
			
		 Para importarlo, dentro del componente:
		 
		 import styles from './VideoItem.module.css';
		 
		 Ya no se importa como antes, ahora "styles" es un objeto de js que contiene las clases de CSS en formato objeto de JS.
		 
		 Restultado: Ahora puedo utilizar el css relativo a mi componente.
		   Se logra porque CSS Modules por detrás cambia el nombre de la clase de la etiqueta, por ejemplo si es "container", en el HTML por ejemplo se llamará "_container_1lept_1".
		   Resumen: El empaquetador (Vite por ejemplo) le agrega caracteres extra en HTML para diferenciarlo de otras clases.
		   
		   En el import se pone styles por convención, pero también se le puede poner css o el que se considere.
		   
		   Nota: No se recomienda que la clase de CSS contenga "-" ya que complejiza el uso para abrir dicha clase en el componente.
		      Ejemplo: si mi clase es .wrapper-list, entonces en el componente debemos indexar el acceso al objeto:
			         <div className={styles['wrapper-list']}>
					 
			    Para simplificar:  en el CSS la clase será .wrapperList
				     y en el componente  <div className={styles.wrapperList}>
					 
			 Si deseo utilizar más de una clase para un mismo elemento:
			    En el Componente, ya que styles es un string, entonces envuelvo todo en un template string y debo contactenar ambos strings con un espacio en medio:
				    <div className={`${styles.wrapperList} ${styles.margin}`}>
					 
					 
		   
		   Pasos:
		    1) Modificar el nombre del archivo CSS.  VideoItem.css -> VideoItem.module.css
			2) En el componente 
				A) importar el módulo.  import styles from './VideoItem.module.css';
				B) llamar al objeto style y describir la clase que utilizaremos.  <div className={styles.container}>
				
				
		    Es conveniente que mi css tenga un reset de estilos, para que no tome los que por defecto tienen diferentes navegadores.
		   Una buena opción tomar el código CSS de https://github.com/sindresorhus/modern-normalize
		   copiarlo y luego importarlo dentro de mi "index.css" con 
				@import './normalize.css';
				
			IMPORTANTE:
			  Para utilizar SASS en Vite:
			    1) Debo modificar la terminación css por scss. VideoItem.module.css -> VideoItem.module.scss
				2) Modificar la importación en los componentes:  import styles from './VideoItem.module.css'; -> import styles from './VideoItem.module.scss';
				3) Instalar SASS en el proyecto: npm i -D sass
				4) Reiniciar el proyecto: npm run dev
