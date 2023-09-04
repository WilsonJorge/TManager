package sgr

class Colaborador {
    String nome
    String email
    String departamento
    static constraints = {

        nome nullable: true
        email nullable: true
        departamento nullable: true
    }
}
