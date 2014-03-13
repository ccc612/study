<%@ page contentType="text/html; charset=UTF-8" %>

<%
	String name = "이성구";
	String passwd = "6789";
	
	request.setCharacterEncoding("UTF-8");
	String userName = request.getParameter("name");
	System.out.println(userName);
	String userPasswd = request.getParameter("passwd");
	
	if(name.equals(userName) && passwd.equals(userPasswd)) {
%>

<!DOCTYPE html>
<html>
<head>
	<title>Insert title here</title>
	<meta charset='UTF-8'>
</head>
<body>

	<h1><%= name %>님 환영합니다 ... ^^*</h1>

</body>
</html>

<%
	}
	else {
%>

	<script>
	alert('로그인 처리에 실패했습니다.\n 아이디와 패스워드를 다시 확인해 주세요.');
	history.go(-1);
	</script>

<%
	}
%>












