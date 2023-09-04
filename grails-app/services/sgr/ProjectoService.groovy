package sgr

import grails.gorm.services.Service

@Service(Projecto)
interface ProjectoService {

    Projecto get(Serializable id)

    List<Projecto> list(Map args)

    Long count()

    void delete(Serializable id)

    Projecto save(Projecto projecto)

}