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

Es recomendable no dejar que Typescript infiera el tipo de dato de nuestras variables, siempre tratemos de establecer el tipo de dato de cada variable que creemos y que usemos como 
argumento en nuestras funciones. Para esto, lo primero que vamos a hacer es; En nuestro archivo tsconfig.json vamos a descomentar la línea:

```json
"noImplicitAny": true,
```

De esta manera, typescript nos va a obligar a siempre colocar el tipo de dato en nuestras variables:

```typescript
const a: number = 10;
let b: string;

function sayHello( msg: string ): string{
    return "Hola " + msg;
}

console.log(sayHello("Raul"));
```

Para impedir que todas las variables queden en el objeto global (window), suele ser muy utilizado el hecho de generar una funcion anónima autoinvocada, que no es más que una 
arroy function encerrada entre paréntesis y con paréntesis al final

```typescript
(() => {})();
```

Ejemplo:

```typescript
(() => {

    const a: number = 10;
    console.log(a);

})();
```

De esta manera yo puedo crear varios archivo en mi proyecto y éstos no caen en el objeto global window

## Depuracion de Codigo

En el caso de que yo necesite que la depuración de código esté activada, pero que se me indique que el error se encuentra en x linea del archivo ts, 
obviamente no necesito que me de el error en la linea del archivo js porque no estoy trabajando con ese archivo. Para eso hacemos lo siguiente en el 
archivo ***tsconfig.json***

Descomentamos esta línea y nos aseguramos que esté en **true**
```json
    "sourceMap": true,
```

Ahora, vayamos a ejecutar el comando que transpila nuestro código typescript a Javascript, vamos a ver que se genera un 3er archivo por cada uno de 
nuestros .ts, con la extension **.js.map**

## Remover comentarios de archivos JS

Si tenemos comentarios en nuestro codigo en los archivos .ts, estos se pasarán al archivo .js al momento de compilar. 

Para avitar esto debemos hacer lo siguiente.


Descomentamos esta línea y nos aseguramos que esté en **true**
```json
    "removeComments": true,
```

## Incluir y excluir directorios y/o archivos

En caso de que queramos excluir o incluir paths de directorios o archivos en la compilación de nuestro proyecto, tendremos que agregar
las siguientes lineas al final del archivo tsconfig.json:

```json
{
  "compilerOptions": {
    ...                               /* Skip type checking all .d.ts files. */
  },
  "exclude": [
    "node_modules2/*.ts"
    ...
  ],
  "include": [
    "node_modules3/*.ts"
    ...
  ]
}
```


## outFile - Archivo de salida

Vamos a generar un único archivo de salida para no tener que incluir todos nuestros archivos .ts en el index.html

Lo que vamos a hacer es descomentar las siguientes líneas del archivo **tsconfig.json** y configurar las rutas, 
tanto del directorio de salida como el nombre del archivo de salida

```json
    "module": "amd",
    "outFile": "./myapp.js",
    "outDir": "./",
```

Eliminamos el parametro ***include***

```json 
  "include": [
    "node_modules3/*.ts"
  ]
```