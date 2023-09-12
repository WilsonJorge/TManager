<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
            <div id="edit-tarefa" class="content scaffold-edit" role="main">

            <g:hasErrors bean="${this.tarefa}">

            </g:hasErrors>
            <g:form resource="${this.tarefa}" method="PUT">
                 <g:render template="taskEdit"/>
            </g:form>
        </div>
    </body>
</html>
