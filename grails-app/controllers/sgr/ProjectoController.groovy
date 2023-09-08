package sgr

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class ProjectoController {

    ProjectoService projectoService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond projectoService.list(params), model:[projectoCount: projectoService.count()]
    }

    def show(Long id) {
        respond projectoService.get(id)
    }

    def create() {

        respond new Projecto(params)
    }

    def save(Projecto projecto) {
        println("DADOS DO PARAMETRO CHEGARAM:"+params)
        if (projecto == null) {
            notFound()
            return
        }

        try {
            projectoService.save(projecto)
        } catch (ValidationException e) {
            respond projecto.errors, view:'create'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'projecto.label', default: 'Projecto'), projecto.id])
                redirect projecto
            }
            '*' { respond projecto, [status: CREATED] }
        }
    }

    def edit(Long id) {
        respond projectoService.get(id)
    }

    def edittable()
    {
        render(view: 'edit')
    }

    def project(){
        render(view: 'project')
    }

    def update(Projecto projecto) {
        if (projecto == null) {
            notFound()
            return
        }

        try {
            projectoService.save(projecto)
        } catch (ValidationException e) {
            respond projecto.errors, view:'edit'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'projecto.label', default: 'Projecto'), projecto.id])
                redirect projecto
            }
            '*'{ respond projecto, [status: OK] }
        }
    }

    def delete(Long id) {
        if (id == null) {
            notFound()
            return
        }

        projectoService.delete(id)

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'projecto.label', default: 'Projecto'), id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'projecto.label', default: 'Projecto'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
