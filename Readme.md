## Summary

Tratamiento de datos en APIs

En este enlace encontrarás la documentación de la API de una tienda de mascotas: https://petstore.swagger.io/
1. Crea tu usuario mediante petición HTTP y posteriormente recupera sus datos llamando al servicio correspondiente.
2. Recoge mediante petición HTTP, el JSON que retorna el endpoint /pet/findByStatus y lista mediante una función los nombres de las mascotas que se hayan vendido.
- El formato de salida deberá estar formado por la tupla {id, name}.
- Puedes utilizar la estructura de datos que prefieras.
3. Crea una clase cuyo constructor requiera de la estructura de datos anterior y realiza un método que pueda recorrerla para poder identificar cuantas mascotas se llaman igual.
- Ejemplo de salida: {“William”: 11, “ Floyd”: 2} Como output, te pediremos el código (puedes
separarlo en archivos como quieras) y los resultados de salida de los puntos anteriores.
- Recuerda que puedes utilizar el lenguaje que prefieras y cualquier mejora adicional será bien considerada


## Prerequisites

1. Node version 16 required:    NVM install 16
                                NVM use 16
2. Execute: npm i


## Execution

Inside root project directory execute:
- node NodeRequest_post.js -> This solves item 1.
- node NodeRequest_get.js -> This solves item 2. and 3.
