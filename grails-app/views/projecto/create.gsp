<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        %{--<a href="#create-projecto" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>--}%

        <div id="create-projecto" class="content scaffold-create" role="main">
            <g:if test="${flash.message}">
            <div class="message" role="status">${flash.message}</div>
            </g:if>
            <g:hasErrors bean="${this.projecto}">
            <ul class="errors" role="alert">
                <g:eachError bean="${this.projecto}" var="error">
                <li <g:if test="${error in org.springframework.validation.FieldError}">data-field-id="${error.field}"</g:if>><g:message error="${error}"/></li>
                </g:eachError>
            </ul>
            </g:hasErrors>
            <g:form resource="${this.projecto}" method="POST">
                <fieldset class="form">
                    <g:render template="createProject"/>
                </fieldset>
            </g:form>
        </div>
    </body>
</html>
