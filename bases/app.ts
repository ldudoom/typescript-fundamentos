(() => {

    // Tipos
    const batman: string = 'Bruce';
    const superman: string = 'Clark';
  
    const existe: boolean = false;
  
    // Tuplas
    const parejaHeroes: [string, string] = [batman,superman];
    const villano: [string, number, boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados: string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    const enum NivelPoder {
        aquamanPower = 80,
        batmanPower = 10,
        supermanPower = 100,
        flashPower = 25
    }
    const fuerzaFlash: NivelPoder = NivelPoder.flashPower;
    const fuerzaSuperman: NivelPoder = NivelPoder.supermanPower;
    const fuerzaBatman: NivelPoder = NivelPoder.batmanPower;
    const fuerzaAcuaman: NivelPoder = NivelPoder.aquamanPower;
  
    // Retorno de funciones
    function activar_batiseñal(): string{
      return 'activada';
    }
  
    function pedir_ayuda(): void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })();
