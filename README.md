home - entry point para webpack

Home - página / (container|smart) -> -> Related - UI -> Categories - UI -> Category - UI -> Playlist - UI -> Media - UI / Pure -> Search / (container|smart) -> -> Input - UI -> Modal - (container|smart) -> -> VideoPlayer - (container|smart) -> Video - UI state -> Spinner - UI -> Controls - UI -> PlayPause - UI -> PlayIcon - UI -> PauseIcon - UI -> Timer - UI -> ProgressBar - UI -> Volume - UI -> VolumeIcon - UI -> FullScreen - UI -> FullScreenIcon - UI

# Partir de un skecth.

```
npm install -g create-react-app
create-react-app myapp
```


# TIPOS DE COMPONENTES


# Componente normal



# Componente funcional
No hace falta un ciclo de vida, siempre se mantiene igual
No tienen estado

# Componente puro
No se renderiza si no cambia su estado (ya trae implementada la funcion should)
Tienen implementado el should...

# LANZAR LA APLICACIÓN

El modo desarrollo incorpora un servidor con webpack
```
npm run build:dev
```

```
npm run build:prod
```




# TIPOS DE COMPONENTES
## 1. SmartComponent (componente inteligente -  que hace) 
Tienen estado, cambia propiedades No tienen estilos


## 2.DumbComponente (componentes tonto- como se ve) Componente tipo funcional o purecomponen por si necesita escuchar un click


Portales

React 16 trae caracteristica para poner componente en otro div
Renderizar un componente en otro componente html



Los componentes funcionales o puros no deben manejar sus propios eventos, le debe llegar por propiedades

# CICLO DE VIDA 

## constructor

## 1. componentWillMount

## 2. componentDidMount
- Se dispara después que el componente está montado en el DOM
- Lugar donde realizar una petición ajax

## 3. componentWillReceiveProps
- No se lanza cuando se monte por primera vez el componente
- Se lanza cuando se actualizan las propiedades

## render
## 4. componentWillUpdate

## 5. shouldComponentUpdate

## 6. componentDidUpdate

## 7. componentWillUnmount
- Destrucción del componente 






# REDUX


-Es un contenedor del estado predecible para nuestras aplicaciones.
-Datos globales de la aplicacion almacenado en un solo lugar que es el store.
- Store: Centro y la verdad de todo, con métodos para actualizar, obtener y escuchar datos.
    - Contiene el estado de la aplicación.
    - Puede acceder al estado con el método getState()
    - Puede actualizar el estado con el método dispatch(action)
    - Escucha cambios con el método subscribe(listener)
    - Dejar de escuchar cambios retornando la función del método subscribe(listener)
- Acción: Bloque de información que envía datos desde la aplicación hacia el store
- Reduccer: Cambian el estado de la aplicación 
    - No deben llamar a API
    - No deben llamar a funciones no puras Date.now() Math.random()
    - No deben modificar su argumentos

El estado es de solo lectura
Los cambios se realizan con funciones puras 

- Se puede utilizar redux con cualquier framework (vanilla, angular..)

# REACT ROUTER

En una Single Page Application (SPA) debemos tener un solo entrypoint
Tipos de enrutadores
# 1. BrowserRouter
Viene con HTML5
/ruta 
# 2. HashRouter
/#/ruta
Vale para identificar que es una ruta del front y no del backend
# 3. MemoryRouter
Mantiene historial de busqueda en memoria
Es para hacer pruebas

# 4. StaticRouter
No cambia de dirección y es perfecto para Server Side Router

# 5. Native Router
React Router para móviles


Link y NavLink

