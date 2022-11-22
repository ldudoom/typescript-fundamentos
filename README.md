# Instalar Typescript

Para instalar Typescript de manera global ejecutamos el siguiente comando

    sudo npm i -g typescript

Para verificar si quedó bien instalado

    tsc --version
    ó
    tsc -v

# Hola Mundo en Typescript

creamos el archivo *app.ts* y colocamos el siguiente codigo:

```javascript
const msg: string = 'Hello World!!!';
console.log(msg);
```

para hacer la transpilacion ejecutamos el siguiente comando posicionados en la carpeta donde esta el archivo que queremos transpilar:

    tsc app
    ó
    tsc app.ts

Este comando generará un archivo *app.js* con el código typescript que escribimos convertido en código javascript

### TSConfig.json


