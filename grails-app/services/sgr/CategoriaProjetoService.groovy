package sgr

import grails.gorm.services.Service

@Service(CategoriaProjeto)
interface CategoriaProjetoService {

    CategoriaProjeto get(Serializable id)

    List<CategoriaProjeto> list(Map args)

    Long count()

    void delete(Serializable id)

    CategoriaProjeto save(CategoriaProjeto categoriaProjeto)

}