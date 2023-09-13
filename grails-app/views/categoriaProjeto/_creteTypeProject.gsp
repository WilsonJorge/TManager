<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>

        <div id="create-categoriaProjeto" class="content scaffold-create" role="main">
            <h1><g:message code="default.create.label" args="[entityName]" /></h1>
            <g:if test="${flash.message}">
            <div class="message" role="status">${flash.message}</div>
            </g:if>
            <g:hasErrors bean="${this.categoriaProjeto}">
            <ul class="errors" role="alert">
                <g:eachError bean="${this.categoriaProjeto}" var="error">
                <li <g:if test="${error in org.springframework.validation.FieldError}">data-field-id="${error.field}"</g:if>><g:message error="${error}"/></li>
                </g:eachError>
            </ul>
            </g:hasErrors>
            <g:form resource="${this.categoriaProjeto}" method="POST">
                <fieldset class="form">
                    <f:all bean="categoriaProjeto"/>
                </fieldset>

            </g:form>
        </div>
    </body>
</html>
