# Fundamentos Typescript

## Instalar Typescript

Para instalar Typescript de manera global ejecutamos el siguiente comando

```shell
sudo npm install -g typescript
```

Para verificar si quedó bien instalado

```shell
tsc --version
# ó
tsc -v
```

# Hola Mundo en Typescript

creamos el archivo *app.ts* y colocamos el siguiente codigo:

```javascript
const msg: string = 'Hello World!!!';
console.log(msg);
```

para hacer la transpilacion ejecutamos el siguiente comando posicionados en la carpeta donde esta el archivo que queremos transpilar:

```shell
tsc app
# ó
tsc app.ts
```

Este comando generará un archivo *app.js* con el código typescript que escribimos convertido en código javascript

### TSConfig.json

El archivo TSConfig.json es un archivo de configuración de Typescript, y para generarlo ejecutamos el siguiente comando:

```shell
tsc --init
```

Una vez ejecutado este comando, se genera nuestro archivo tsconfig.json donde vamos a colocar configuración de como queremos trabajar con typescript.

Tiene configuraciones como por ejemplo:

```json
/* Language and Environment */
"target": "es2016",
/* Modules */
"module": "commonjs",
/* Interop Constraints */
"esModuleInterop": true,
/* Type Checking */
"strict": true,
"noImplicitAny": true,
...
```

Aquí iremos poniendo las reglas con las cuales vamos a trabajar, mientras es más estricto es mejor, nos obligará a escribir código más limpio, más ordenado, más fácil de 
mantener, etc.

Una vez que tenemos esta configuración, podemos eliminar el archivo app.js generado anteriormente, y lo volvemos a generar, entonces se generará el nuevo archivo
cumpliendo las convenciones que colocamos en nuestro archivo de configuración.

**NOTA:** Para hacer la transpilación de todos los archivos, simplemente nos colocamos dentro del directorio donde estan los archivos de typescript y ejecutamos el comando de la siguiente manera

```shell
tsc
```

Unicamente escribimos el comando **tsc**, y éste tomará va a tomar la configuración del archivo tsconfig.json para generar la compilación de todos los archivos de
typescript que se encuentren ahí.




### Modo Observador - Watch Mode

Cuando colocamos nuestro proyecto en modo observador, éste va a detectar cualquier cambio en cualquier archivo typescript y nos va a ayudar a realizar la 
compilación (transpilación) automáticamente.

Para colocar nuestro proyecto en modo observador ejecutamos:

```shell
tsc --watch
# ó
tsc -w
```


## Inferir tipos y modo estricto
