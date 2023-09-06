package sgr

class Cliente {
     String nome //Nome do Cliente ou da Empresa
     String nuit //Nuit da Empresa
    String email //Email de Contacto da Empresa
    int telefone  //Contacto da Empresa
    static constraints = {
        nome nullable: true
        nuit nullable: true
        email nullable: true
        telefone  nullable: true
    }
}
