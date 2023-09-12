<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>

        <div id="create-cliente" class="content scaffold-create" role="main">

            <g:hasErrors bean="${this.cliente}">
            <ul class="errors" role="alert">
                <g:eachError bean="${this.cliente}" var="error">
                <li <g:if test="${error in org.springframework.validation.FieldError}">data-field-id="${error.field}"</g:if>><g:message error="${error}"/></li>
                </g:eachError>
            </ul>
            </g:hasErrors>
            <g:form resource="${this.cliente}" method="POST">
                <g:render template="createClient"/>
            </g:form>
        </div>
    </body>
</html>
