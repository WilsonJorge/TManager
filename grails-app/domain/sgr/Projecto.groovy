package sgr

class Projecto {

    String nome //Nome do Projecto
    Date dataInicio //Data de Inicio do Projecto
    Date dataFim  //Data do Termino do Projecto
    String semData  //Sem data do Termino do Projecto
    String categoria //Categoria do Projecto
    String  departamento //Departamento
    String cliente //Cliente do Projecto em execucao
    String resumo //Resumo do Projecto
    String notasResumo //Notas do Projecto
    String atribuido // Manager do Projecto
    byte[] arquivos //Arquivos
    String moeda //Tipo de Moeda paga Pelo Projecto
    double orcamento // Orcamento pago pelo Projecto
    int horas //Horas Trabalhdas no Projecto

    static constraints = {
        nome nullable: true
        dataInicio nullable: true
        dataFim nullable: true
        semData nullable: true
        categoria nullable: true
        departamento nullable: true
        cliente nullable: true
        resumo nullable: true
        notasResumo nullable: true
        atribuido nullable: true
        arquivos nullable: true
        moeda nullable: true
        orcamento nullable:true
        horas nullable :true
    }
}
