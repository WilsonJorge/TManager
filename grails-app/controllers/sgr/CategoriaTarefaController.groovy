package sgr

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class CategoriaTarefaController {

    CategoriaTarefaService categoriaTarefaService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond categoriaTarefaService.list(params), model:[categoriaTarefaCount: categoriaTarefaService.count()]
    }

    def show(Long id) {
        respond categoriaTarefaService.get(id)
    }

    def create() {
        respond new CategoriaTarefa(params)
    }

    def save(CategoriaTarefa categoriaTarefa) {
        if (categoriaTarefa == null) {
            notFound()
            return
        }

        try {
            categoriaTarefaService.save(categoriaTarefa)
        } catch (ValidationException e) {
            respond categoriaTarefa.errors, view:'create'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'categoriaTarefa.label', default: 'CategoriaTarefa'), categoriaTarefa.id])
                redirect categoriaTarefa
            }
            '*' { respond categoriaTarefa, [status: CREATED] }
        }
    }

    def edit(Long id) {
        respond categoriaTarefaService.get(id)
    }

    def update(CategoriaTarefa categoriaTarefa) {
        if (categoriaTarefa == null) {
            notFound()
            return
        }

        try {
            categoriaTarefaService.save(categoriaTarefa)
        } catch (ValidationException e) {
            respond categoriaTarefa.errors, view:'edit'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'categoriaTarefa.label', default: 'CategoriaTarefa'), categoriaTarefa.id])
                redirect categoriaTarefa
            }
            '*'{ respond categoriaTarefa, [status: OK] }
        }
    }

    def delete(Long id) {
        if (id == null) {
            notFound()
            return
        }

        categoriaTarefaService.delete(id)

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'categoriaTarefa.label', default: 'CategoriaTarefa'), id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'categoriaTarefa.label', default: 'CategoriaTarefa'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
