package sgr

import grails.testing.mixin.integration.Integration
import grails.gorm.transactions.Rollback
import spock.lang.Specification
import org.hibernate.SessionFactory

@Integration
@Rollback
class ProjectoServiceSpec extends Specification {

    ProjectoService projectoService
    SessionFactory sessionFactory

    private Long setupData() {
        // TODO: Populate valid domain instances and return a valid ID
        //new Projecto(...).save(flush: true, failOnError: true)
        //new Projecto(...).save(flush: true, failOnError: true)
        //Projecto projecto = new Projecto(...).save(flush: true, failOnError: true)
        //new Projecto(...).save(flush: true, failOnError: true)
        //new Projecto(...).save(flush: true, failOnError: true)
        assert false, "TODO: Provide a setupData() implementation for this generated test suite"
        //projecto.id
    }

    void "test get"() {
        setupData()

        expect:
        projectoService.get(1) != null
    }

    void "test list"() {
        setupData()

        when:
        List<Projecto> projectoList = projectoService.list(max: 2, offset: 2)

        then:
        projectoList.size() == 2
        assert false, "TODO: Verify the correct instances are returned"
    }

    void "test count"() {
        setupData()

        expect:
        projectoService.count() == 5
    }

    void "test delete"() {
        Long projectoId = setupData()

        expect:
        projectoService.count() == 5

        when:
        projectoService.delete(projectoId)
        sessionFactory.currentSession.flush()

        then:
        projectoService.count() == 4
    }

    void "test save"() {
        when:
        assert false, "TODO: Provide a valid instance to save"
        Projecto projecto = new Projecto()
        projectoService.save(projecto)

        then:
        projecto.id != null
    }
}
