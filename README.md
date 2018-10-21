# Partir de un skecth.

```
npm install -g create-react-app
create-react-app myapp
```


# TIPOS DE COMPONENTES


# Componente normal



# Componente funcional
No hace falta un ciclo de vida, siempre se mantiene igual

# Componente puro
No se renderiza si no cambia su estado (ya trae implementada la funcion should)


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

## 1. componentWillMount

## 2. componentDidMount
- Se dispara después que el componente está montado en el DOM
- Lugar donde realizar una petición ajax

## 3. componentWillReceiveProps
- No se lanza cuando se monte por primera vez el componente
- Se lanza cuando se actualizan las propiedades

## 4. componentWillUpdate

## 5. shouldComponentUpdate

## 6. componentDidUpdate

## 7. componentWillUnmount
- Destrucción del componente 

