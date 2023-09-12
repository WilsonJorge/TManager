<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <div class="nav" role="navigation">

        </div>
        <div id="create-tarefa" class="content scaffold-create" role="main">
            <g:if test="${flash.message}">
            <div class="message" role="status">${flash.message}</div>
            </g:if>
            <g:hasErrors bean="${this.tarefa}">
            <ul class="errors" role="alert">
                <g:eachError bean="${this.tarefa}" var="error">
                <li <g:if test="${error in org.springframework.validation.FieldError}">data-field-id="${error.field}"</g:if>><g:message error="${error}"/></li>
                </g:eachError>
            </ul>
            </g:hasErrors>
            <g:form resource="${this.tarefa}" method="POST">
                <fieldset class="form">
                   <g:render  template="createTask"/>
                </fieldset>
            </g:form>
        </div>
    </body>
</html>
