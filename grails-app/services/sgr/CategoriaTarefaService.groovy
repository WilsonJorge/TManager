package sgr

import grails.gorm.services.Service

@Service(CategoriaTarefa)
interface CategoriaTarefaService {

    CategoriaTarefa get(Serializable id)

    List<CategoriaTarefa> list(Map args)

    Long count()

    void delete(Serializable id)

    CategoriaTarefa save(CategoriaTarefa categoriaTarefa)

}