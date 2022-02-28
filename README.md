# React-App - MERCADO LIBRE

![](https://github.com/wenn1897/React-ML/blob/main/ce-mercado-libre.png)


Una app sencilla para buscar productos de mercado libre.

##STACK
- Node js : Backend
- Express js : Server
- React js : Frontend

##Estructura

- Backend: En esta sección se desarrolla y configura el API que consumira las API's de Mercado libre y obtendra los datos para luego tranformarlos y responder a cualquier llamado.

		Ejecución: El backend cuenta con nodemon, una libreria que se encarga de vigilar el sistema de archivos y reinicia automáticamente el proceso, para iniciarlo hay que digitar el siguiente comando en consola: "npm start"
		
		Archivos:
			- src/index.js : 
				- Creación del servidor
				- Definición del puerto
				- Configuración de politica CORS
				- Definición de ruta para consumo del API
				- Uso de middleware morgan (visualización de datos por consola  		antes de que lleguen al servidor)
				
			- src/routes/search.routes.js : 
				- Consumo de API con captura de query (GET) :
				 'https://api.mercadolibre.com/sites/MLA/search?q=:query'
				- Transformación de datos para response:  TransformData().
				- Consumo de API para obtener descripción del producto (GET): 
				 'https://api.mercadolibre.com/items/MLA1110245153/description'
				 - Consumo de API para obtener detalle del producto (GET): 
				 'https://api.mercadolibre.com/items/MLA1110245153'
				 - Transformación de datos para response:  TransformDescription()
- Frontend: En esta sección se encuentran las 3 vistas por medio de las cuales el usuario podrá interactuar con la aplicación.
		Ejecución:  El frontend debera ejecutarse corriendo el siguiente comando por consola "npm run start" que a su vez ejecutará el comando "webpack-cli serve --open --mode development"

		Archivos:
			public/index.html : 
				- Estructura basica html, enlace con archivos js por medio del id 	"app"
				- src/assets: Almacenamiento de iconos y logos.
				- src/components: En esta carpeta se almacenan los componentes que renderiza la aplicación. 
				- src/pages: Almacenamiento de las rutas de la aplicacion.
				- src/routes: En esta carpeta se almacena el archivo App.js en donde se definen las rutas de la aplicación haciendo uso de React Router Dom v6. 
					 - src/index.js : Archivo principal de la aplicación en donde se montan componentes al DOM.
					 webpack.config : 
					 	- HtmlWebpackPlugin:  Procesamiento de archivos HTML.
						- MiniCssExtractPlugin: Crea un archivo CSS por cada archivo JS que contiene CSS

##Keywords: 
			- Events
			- Hooks
			- Components Class
			- Component Function
			- DOM
			- References
			- Async await
			


 
