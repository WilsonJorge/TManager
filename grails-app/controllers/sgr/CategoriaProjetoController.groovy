package sgr

import grails.validation.ValidationException
import static org.springframework.http.HttpStatus.*

class CategoriaProjetoController {

    CategoriaProjetoService categoriaProjetoService

    static allowedMethods = [save: "POST", update: "PUT", delete: "DELETE"]

    def index(Integer max) {
        params.max = Math.min(max ?: 10, 100)
        respond categoriaProjetoService.list(params), model:[categoriaProjetoCount: categoriaProjetoService.count()]
    }

    def show(Long id) {
        respond categoriaProjetoService.get(id)
    }

    def create() {
        respond new CategoriaProjeto(params)
    }

    def save(CategoriaProjeto categoriaProjeto) {
        if (categoriaProjeto == null) {
            notFound()
            return
        }

        try {
            categoriaProjetoService.save(categoriaProjeto)
        } catch (ValidationException e) {
            respond categoriaProjeto.errors, view:'create'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.created.message', args: [message(code: 'categoriaProjeto.label', default: 'CategoriaProjeto'), categoriaProjeto.id])
                redirect categoriaProjeto
            }
            '*' { respond categoriaProjeto, [status: CREATED] }
        }
    }

    def edit(Long id) {
        respond categoriaProjetoService.get(id)
    }

    def update(CategoriaProjeto categoriaProjeto) {
        if (categoriaProjeto == null) {
            notFound()
            return
        }

        try {
            categoriaProjetoService.save(categoriaProjeto)
        } catch (ValidationException e) {
            respond categoriaProjeto.errors, view:'edit'
            return
        }

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.updated.message', args: [message(code: 'categoriaProjeto.label', default: 'CategoriaProjeto'), categoriaProjeto.id])
                redirect categoriaProjeto
            }
            '*'{ respond categoriaProjeto, [status: OK] }
        }
    }

    def delete(Long id) {
        if (id == null) {
            notFound()
            return
        }

        categoriaProjetoService.delete(id)

        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.deleted.message', args: [message(code: 'categoriaProjeto.label', default: 'CategoriaProjeto'), id])
                redirect action:"index", method:"GET"
            }
            '*'{ render status: NO_CONTENT }
        }
    }

    protected void notFound() {
        request.withFormat {
            form multipartForm {
                flash.message = message(code: 'default.not.found.message', args: [message(code: 'categoriaProjeto.label', default: 'CategoriaProjeto'), params.id])
                redirect action: "index", method: "GET"
            }
            '*'{ render status: NOT_FOUND }
        }
    }
}
