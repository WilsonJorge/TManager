<!DOCTYPE html>
<html>
    <head>

    </head>
    <body>
        <a href="#edit-projecto" class="skip" tabindex="-1"><g:message code="default.link.skip.label" default="Skip to content&hellip;"/></a>
        <div class="nav" role="navigation">

        </div>
        <div id="edit-projecto" class="content scaffold-edit" role="main">

            <g:hasErrors bean="${this.projecto}">
            <ul class="errors" role="alert">
                <g:eachError bean="${this.projecto}" var="error">
                <li <g:if test="${error in org.springframework.validation.FieldError}">data-field-id="${error.field}"</g:if>><g:message error="${error}"/></li>
                </g:eachError>
            </ul>
            </g:hasErrors>
            <g:form resource="${this.projecto}" method="PUT">
                 <g:render template="taskEdit"/>
            </g:form>
        </div>
    </body>
</html>
