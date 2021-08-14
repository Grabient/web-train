<%--
  Created by IntelliJ IDEA.
  User: jianhuo
  Date: 2021/8/14
  Time: 14:14
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Login</title>
</head>
<body>

<h2>登录</h2>
<form action="/login" method="post">
    用户名:<input type="text" name="username"> <br>
    密码:  <input type="password" name="password"> <br>
    登录:  <input type="submit">
</form>

</body>
</html>
