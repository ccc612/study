<%@ page contentType="text/html; charset=UTF-8" %>

<%
    String name = "이성근";
    String passwd = "6789";
    request.setCharacterEncoding("UTF-8");
    String userName = request.getParameter("name");
    String userPasswd = request.getParameter("passwd");
    
    System.out.println(userName);
    
    if (name.equals(userName) 
    		&& passwd.equals(userPasswd)) {    	
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
    <h1>welcome <%= userName %>!</div>
</body>
</html>

<%
    } else {
%>

<script>
alert("Login Failed!!\nPlease re-check your ID and password!");
location.href="formtest.html";
</script>

<%    
}
%>