import { Curso } from "./curso";

export enum NivelEducativo {
    BACHILELRATO = "Bachillerato",
    UNIVERSITARIO = "Universitario", 
    POSGRADO = "Posgrado"
}

export class Aprendiz {

    constructor(public nombres: string, public apellidos: string, public avatar:string, public edad: number, public noivelEducativo: NivelEducativo, public cursos: Curso[] ) {
        
    }

    public darCursosCertificados():number {
        let totalCursosC:number = 0;
        for (let index = 0; index < this.cursos.length; index++) {
            let curso: Curso = this.cursos[index];
            if(curso.certificado) {
                totalCursosC +=1;
            }
        } 
        return totalCursosC;
    }
}