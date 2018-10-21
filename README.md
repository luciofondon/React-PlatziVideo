# Partir de estructura de una aplicación

```
npm install -g create-react-app
create-react-app myapp
```


#TIPOS DE COMPONENTES

#Componente normal


#Componente funcional
No hace falta un ciclo de vida, siempre se mantiene igual

#Componente puro
No se renderiza si no cambia su estado (ya trae implementada la funcion should)

npm run build:prod





SmartComponent (componente inteligente -  que hace) Tienen estado, cambia propiedades No tienen estilos


DumbComponente (componentes tonto- como se ve) Componente tipo funcional o purecomponen por si necesita escuchar un click


Portales

React 16 trae caracteristica para poner componente en otro div
Renderizar un componente en otro componente html



Los componentes funcionales o puros no deben manejar sus propios eventos, le debe llegar por propiedades