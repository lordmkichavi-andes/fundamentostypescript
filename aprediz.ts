export enum NivelEducativo {
    BACHILELRATO = "Bachillerato",
    UNIVERSITARIO = "Universitario", 
    POSGRADO = "Posgrado"
}

export class Aprendiz {

    constructor(public nombres: string, public apellidos: string, public avatar:string, public edad: number, public noivelEducativo: NivelEducativo ) {
        
    }
}