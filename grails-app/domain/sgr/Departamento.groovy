package sgr

class Departamento {
    String tipoDepartamento //O tipo de Departamento
    String funcaoDepartamento //Funcao Desempenhada pelo Departamento
    static constraints = {
        tipoDepartamento nullable: true
        funcaoDepartamento nullable: true
    }
}
