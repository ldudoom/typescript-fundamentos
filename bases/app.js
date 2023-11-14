"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    const fuerzaFlash = 25 /* NivelPoder.flashPower */;
    const fuerzaSuperman = 100 /* NivelPoder.supermanPower */;
    const fuerzaBatman = 10 /* NivelPoder.batmanPower */;
    const fuerzaAcuaman = 80 /* NivelPoder.aquamanPower */;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
