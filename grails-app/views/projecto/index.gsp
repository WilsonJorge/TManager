<!DOCTYPE html>
<html>
<head>

</head>
<body>
<div class="nav" role="navigation">
    <ul>

    </ul>
</div>
<div id="list-projeto" class="content scaffold-list" role="main">
    <g:if test="${flash.message}">
        <div class="message" role="status">${flash.message}</div>
    </g:if>

    <g:render template="listTask"/>

</div>
</body>
</html>