package sgr

class Tarefa {
    String tarefa   //TAREFA
    String categoria // CATEGORIA DA TAREFA
    String projeto; // PROJECTO DA TAREFA
    Date inicio // DATA DE INICIO DA TAREFA
    Date fim  // DATA DE FIM DA TAREFA, HA CASOS EM QUE NAO HA UMA DATA FIM
    String descricao  //DESCRICAO DA TAREFA
    String status  // STATUS DA TAREFA
    String prioridade  // PRIPORIDADE DA TAREFA
    String subTarefa   //SUBTAREFA, PREENCHIDA EM CASO DE UMA TAREFA DEPENDE DA OUTRA
    String dataFimSubtarefa  // DATA FIM DA SUBTAREFA  NO CASO DE HAVER UMA DATA PREVISTA
    byte [] ficheiro // FICHEIRO DA TAREFA
    static  hasMany = [colaborador:Colaborador]  // UM COLOBORADOR PODE TER UM O MAIS TAREFAS

    static constraints = {
        tarefa nullable: true
        categoria nullable:  true
        projeto  nullable:  true
        inicio nullable:  true
        fim nullable: true
        descricao nullable:  true
        status nullable:  true
        prioridade nullable: true
        subTarefa nullable:  true
        dataFimSubtarefa nullable:  true
        ficheiro nullable:  true
        colaborador nullable:  true

    }
}
