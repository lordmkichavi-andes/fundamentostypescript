export var NivelEducativo;
(function (NivelEducativo) {
    NivelEducativo["BACHILELRATO"] = "Bachillerato";
    NivelEducativo["UNIVERSITARIO"] = "Universitario";
    NivelEducativo["POSGRADO"] = "Posgrado";
})(NivelEducativo || (NivelEducativo = {}));
var Aprendiz = /** @class */ (function () {
    function Aprendiz(nombres, apellidos, avatar, edad, noivelEducativo) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.avatar = avatar;
        this.edad = edad;
        this.noivelEducativo = noivelEducativo;
    }
    return Aprendiz;
}());
export { Aprendiz };
