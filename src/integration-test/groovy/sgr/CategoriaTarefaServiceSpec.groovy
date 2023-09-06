package sgr

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import spock.lang.Specification
import org.hibernate.SessionFactory

@Integration
@Rollback
class CategoriaTarefaServiceSpec extends Specification {

    CategoriaTarefaService categoriaTarefaService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new CategoriaTarefa(...).save(flush: true, failOnError: true)
        //new CategoriaTarefa(...).save(flush: true, failOnError: true)
        //CategoriaTarefa categoriaTarefa = new CategoriaTarefa(...).save(flush: true, failOnError: true)
        //new CategoriaTarefa(...).save(flush: true, failOnError: true)
        //new CategoriaTarefa(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //categoriaTarefa.id
    }

    void "test get"() {
        setupData()

        expect:
        categoriaTarefaService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<CategoriaTarefa> categoriaTarefaList = categoriaTarefaService.list(max: 2, offset: 2)

        then:
        categoriaTarefaList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        categoriaTarefaService.count() == 5
    }

    void "test delete"() {
        Long categoriaTarefaId = setupData()

        expect:
        categoriaTarefaService.count() == 5

        when:
        categoriaTarefaService.delete(categoriaTarefaId)
        sessionFactory.currentSession.flush()

        then:
        categoriaTarefaService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        CategoriaTarefa categoriaTarefa = new CategoriaTarefa()
        categoriaTarefaService.save(categoriaTarefa)

        then:
        categoriaTarefa.id != null
    }
}
